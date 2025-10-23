<?php

namespace App\Filament\Resources\Settings\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;

class SettingForm {
    public static function configure(Schema $schema): Schema {
        return $schema
            ->components([
                Tabs::make()->schema([

                    Tab::make('Site')->schema([

                        FileUpload::make('data.site_logo_path')->image()->disk('public')->directory('site')->label('Logo'),

                        FileUpload::make('data.site_favicon_path')
                            ->image()
                            ->disk('public')
                            ->directory('site')
                            ->label('Favicon')
                            ->afterLabel('Only .ico Files Allowed')
                            ->acceptedFileTypes(['image/x-icon', 'image/vnd.microsoft.icon']),


                        TextInput::make('data.site_name')->label('Site Name'),
                        TextInput::make('data.site_slogan')->label('Site Slogan'),
                        TextInput::make('data.primary_phone')->label('Primary Phone'),
                        TextInput::make('data.secondary_phone')->label('Secondary Phone'),
                        TextInput::make('data.from_email_address')->label('From Email Address'),
                        TextInput::make('data.from_email_name')->label('From Email Name'),
                        TextInput::make('data.to_email_address')->label('To Email Address'),
                        TextInput::make('data.to_email_name')->label('To Email Name'),


                    ]),

                    Tab::make('Email')->schema([

                        Select::make('mail_driver')->options(["smtp" => 'SMTP']),


                        TextInput::make('data.mail_host')->label('Mail Host'),
                        TextInput::make('data.mail_port')->label('Mail Port'),
                        TextInput::make('data.mail_encryption')->label('Mail Encryption'),
                        TextInput::make('data.mail_username')->label('Mail Username'),
                        TextInput::make('data.mail_password')->label('Mail Password'),


                    ]),

                    Tab::make('Social Network')->schema([

                        TextInput::make('data.facebook_address')->label('Facebook Address'),
                        TextInput::make('data.google_address')->label('Google Address'),
                        TextInput::make('data.pinterest_address')->label('Pinterest Address'),
                        TextInput::make('data.twitter_address')->label('Twitter Address'),
                        TextInput::make('data.instagram_address')->label('Instagram Address'),
                        TextInput::make('data.linkedin_address')->label('Linkedin Address'),
                        TextInput::make('data.youtube_address')->label('Youtube Address'),


                    ]),

                    Tab::make('Captcha')->schema([

                        TextInput::make('data.sitekey')->label('Sitekey'),
                        TextInput::make('data.secret')->label('Secret'),

                    ]),

                    Tab::make('Social Media Login')->schema([

                        TextInput::make('data.google_client_id')->label('Google Client ID'),
                        TextInput::make('data.google_client_secret')->label('Google Client Secret'),

                        TextInput::make('data.linkedin_client_id')->label('Linkedin Client ID'),
                        TextInput::make('data.linkedin_client_secret')->label('Linkedin Client Secret'),

                        TextInput::make('data.github_client_id')->label('Github Client ID'),
                        TextInput::make('data.github_client_secret')->label('Github Client Secret'),

                    ]),

                    Tab::make('Payment Gateway')->schema([

                        TextInput::make('data.stripe_webhook')->label('Stripe Webhook'),
                        TextInput::make('data.stripe_key')->label('Stripe Key'),
                        TextInput::make('data.stripe_secret_key')->label('Stripe Secret Key'),

                        TextInput::make('data.paypal_sandbox_client_id')->label('Paypal Sandbox Client ID'),
                        TextInput::make('data.paypal_sandbox_secret_key')->label('Paypal Sandbox Secret Key'),



                    ]),

                    Tab::make('AI Access Tokens')->schema([

                        TextInput::make('data.hugging_face_access_token')->label('Hugging Face Access Token'),
                        


                    ]),




                ])->columnSpanFull()
            ]);
    }
}
