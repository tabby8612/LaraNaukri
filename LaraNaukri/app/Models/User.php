<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Filament\Models\Contracts\FilamentUser;
use Filament\Panel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use phpDocumentor\Reflection\Types\Boolean;

class User extends Authenticatable implements FilamentUser {
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'google_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function canAccessPanel(Panel $panel): bool {
        return $this->role == 'admin';
    }


    protected function candidate(): HasOne {
        return $this->hasOne(Candidate::class);
    }

    public function company(): HasOne {
        return $this->hasOne(Company::class);
    }


    public function isCandidate(): bool {
        return $this->role == 'candidate';
    }

    public function isEmployer(): bool {
        return $this->role == 'employer' || $this->role == 'company';
    }

    public function isAdmin(): bool {
        return $this->role == 'admin';
    }


    //--relations
    public function payments(): HasMany {
        return $this->hasMany(PaymentHistory::class);
    }




}
