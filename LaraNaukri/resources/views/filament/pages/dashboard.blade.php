<x-filament-panels::page>
    {{-- Page content --}}
    <div class="text-lg mx-auto p-3 rounded-xl">
        <h1 class="text-4xl font-montserrat font-bold adminHeading">Welcome to Admin Dashboard</h1>

    </div>

    {{-- <x-filament-widgets::widgets :widgets="$this->getWidgets()" :columns="$this->getColumns()" /> --}}

    <div class="grid grid-cols-2 gap-5">

        <x-filament-widgets::widgets :widgets="$this->UsersWidgets()" :columns="$this->getColumns()" />
        <x-filament-widgets::widgets :widgets="$this->CandidatesWidgets()" :columns="$this->getColumns()" />
        <x-filament-widgets::widgets :widgets="$this->JobsWidgets()" :columns="$this->getColumns()" />
        <x-filament-widgets::widgets :widgets="$this->CompaniesWidgets()" :columns="$this->getColumns()" />

    </div>

    <div>
        @livewire(\App\Filament\Widgets\ActiveCompanies::class)
    </div>

    <div class="flex gap-5">
        <div class="w-full">
            @livewire(\App\Filament\Widgets\RecentCandidates::class)
        </div>

        <div class="w-full">
            @livewire(\App\Filament\Widgets\RecentJobs::class)
        </div>

    </div>


</x-filament-panels::page>