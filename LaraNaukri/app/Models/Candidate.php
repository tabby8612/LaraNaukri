<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Candidate extends Model {
    //
    protected $fillable = [
        "user_id", "first_name"
    ];

    //--- Relationships

    public function city(): BelongsTo {
        return $this->belongsTo(City::class);
    }

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function country(): BelongsTo {
        return $this->belongsTo(Country::class);
    }

    public function state(): BelongsTo {
        return $this->belongsTo(State::class);
    }

    public function careerLevel(): BelongsTo {
        return $this->belongsTo(CareerLevel::class);
    }

    public function gender(): BelongsTo {
        return $this->belongsTo(Gender::class);
    }

    public function maritalStatus(): BelongsTo {
        return $this->belongsTo(MaritalStatus::class);
    }

    public function nationality(): BelongsTo {
        return $this->belongsTo(Nationality::class);
    }

    public function industry(): BelongsTo {
        return $this->belongsTo(Industry::class);
    }

    public function category(): BelongsTo {
        return $this->belongsTo(Category::class);
    }

    public function resumes(): HasMany {
        return $this->hasMany(Resume::class);
    }

    public function projects(): HasMany {
        return $this->hasMany(Project::class);
    }

    public function subjects(): BelongsToMany {
        return $this->belongsToMany(Subject::class);
    }

    public function skills(): HasMany {
        return $this->hasMany(CandidateSkill::class);
    }

    public function languages(): BelongsToMany {
        return $this->belongsToMany(Language::class)->withPivot(["language_level", "id"]);
    }

    public function experiences(): HasMany {
        return $this->hasMany(CandidateExperience::class);
    }

    public function educations(): HasMany {
        return $this->hasMany(Education::class);
    }

    public function applications(): HasMany {
        return $this->hasMany(Application::class);
    }

    public function favoriteJobs(): BelongsToMany {
        return $this->belongsToMany(Job::class, 'candidate_job_favorite')->withTimestamps();
    }

    public function companies(): BelongsToMany {
        return $this->belongsToMany(Company::class)->withTimestamps();
    }

    public function payments(): HasMany {
        return $this->hasMany(PaymentHistory::class);
    }

    public function companiesUnlocked(): BelongsToMany {
        return $this->belongsToMany(Company::class, 'candidate_company_unlocked');
    }












    //--- Getters
    protected function dateOfBirth(): Attribute {
        return Attribute::make(
            get: fn($value) => Carbon::parse($value)->format("Y-m-d")
        );
    }

    protected function createdAt(): Attribute {

        return Attribute::make(
            get: fn($value) => Carbon::parse($value)->format("dS \of F, o")
        );
    }
}
