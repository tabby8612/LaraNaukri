<?php

namespace App\Providers\Filament;

use App\Filament\Resources\Blogposts\BlogpostResource;
use App\Filament\Resources\Candidates\CandidateResource;
use App\Filament\Resources\Companies\CompanyResource;
use App\Filament\Resources\Jobs\JobResource;
use App\Filament\Resources\Users\UserResource;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Navigation\NavigationGroup;
use Filament\Navigation\NavigationItem;
use Filament\Pages\Dashboard;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Support\Icons\Heroicon;
use Filament\Widgets\AccountWidget;
use Filament\Widgets\FilamentInfoWidget;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;

use function Filament\Support\original_request;

class AdminPanelProvider extends PanelProvider {
    public function panel(Panel $panel): Panel {
        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->login()
            ->colors([
                'primary' => Color::Green,
            ])
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\Filament\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\Filament\Pages')
            ->pages([
                Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\Filament\Widgets')
            ->widgets([
                AccountWidget::class,
                FilamentInfoWidget::class,
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ])
            ->viteTheme('resources/css/filament/admin/theme.css')
            ->sidebarCollapsibleOnDesktop()
            ->brandLogo('http://127.0.0.1:5173/storage/app/public/LaraNaukri%20Logo.png')
            ->brandLogoHeight('40px')
            ->globalSearch(false)

            ->navigationItems([
                NavigationItem::make('Add New Admin User')
                    ->group('Admin Users')
                    ->icon('heroicon-s-user-plus')
                    ->url(fn() => UserResource::getUrl('create'))
                    ->isActiveWhen(fn() => original_request()->route()->uri() == 'admin/users/create')

                    ->sort(3),
                NavigationItem::make('Add New Job')
                    ->group('Jobs')
                    ->icon('heroicon-s-pencil-square')
                    ->url(fn() => JobResource::getUrl('create'))
                    ->isActiveWhen(fn() => original_request()->routeIs('filament.admin.resources.jobs.create'))
                    ->sort(5),

                NavigationItem::make('Add New Company')
                    ->group('Companies')
                    ->icon('heroicon-s-document-plus')
                    ->url(fn() => CompanyResource::getUrl('create'))
                    ->isActiveWhen(fn() => original_request()->routeIs('filament.admin.resources.companies.create'))
                    ->sort(7),

                NavigationItem::make('Add New Candidate')
                    ->group('Candidates')
                    ->icon('heroicon-s-user-plus')
                    ->url(fn() => CandidateResource::getUrl('create'))
                    ->isActiveWhen(fn() => original_request()->routeIs('filament.admin.resources.candidates.create'))
                    ->sort(9),

                NavigationItem::make(label: 'Add New Blog Post')
                    ->group('Blog Posts')
                    ->icon('heroicon-s-document-plus')
                    ->url(fn() => BlogpostResource::getUrl('create'))
                    ->isActiveWhen(fn() => original_request()->routeIs('filament.admin.resources.blogposts.create'))
                    ->sort(11)
            ])
            // ->navigationGroups([
            //     'Admin Users',
            //     'Jobs',
            //     'Companies',
            //     'Candidates',
            //     'Blogposts',
            // ])
            ->navigationGroups([
                NavigationGroup::make('Admin Users')
                    ->label('Admin Users')
                    ->collapsible()
                    ->collapsed()
                    ->icon('heroicon-s-user'),
                NavigationGroup::make('Jobs')
                    ->label('Jobs')
                    ->collapsible()
                    ->collapsed()
                    ->icon('heroicon-s-briefcase'),
                NavigationGroup::make('Companies')
                    ->label('Companies')
                    ->collapsible()
                    ->collapsed()
                    ->icon('heroicon-s-building-office-2'),
                NavigationGroup::make('Candidates')
                    ->label('Candidates')
                    ->collapsible()
                    ->collapsed()
                    ->icon('heroicon-s-users'),
                NavigationGroup::make('Blog Posts')
                    ->label('Blog Posts')
                    ->collapsible()
                    ->collapsed()
                    ->icon('heroicon-s-pencil-square'),

            ])
        ;

    }
}
