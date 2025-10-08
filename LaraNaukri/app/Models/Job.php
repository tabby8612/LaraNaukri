<?php

namespace App\Models;

use App\Enums\CurrencyEnums;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;
use Psy\Command\WhereamiCommand;

class Job extends Model {
    /** @use HasFactory<\Database\Factories\JobFactory> */
    use HasFactory;

    protected $table = "jobs_listings";
    protected $guarded = [];

    // --- Relations

    public function companies(): BelongsTo {
        return $this->belongsTo(Company::class, "company_id");
    }

    public function skills(): BelongsToMany {
        return $this->belongsToMany(Skill::class, "jobs_listings_skills");
    }

    public function category(): BelongsTo {
        return $this->belongsTo(Category::class);
    }

    public function experience(): BelongsTo {
        return $this->belongsTo(Experience::class);
    }

    public function career(): BelongsTo {
        return $this->belongsTo(CareerLevel::class, 'career_level');
    }



    public function city(): BelongsTo {
        return $this->belongsTo(City::class);
    }

    protected function favorites(): BelongsToMany {
        return $this->belongsToMany(Candidate::class, 'candidate_job_favorite');
    }

    public function applications(): HasMany {
        return $this->hasMany(Application::class);
    }



    // --- Mutators

    protected function createdAt(): Attribute {
        return Attribute::make(function ($value) {
            $dt = Carbon::parse($value);
            return "$dt->day/$dt->month/$dt->year";
        });
    }

    protected function hideSalary(): Attribute {
        return Attribute::make(set: fn($val) => $val == 'No' ? 0 : 1);
    }


    protected function applyBefore(): Attribute {
        return Attribute::make(
            get: fn($value) => Carbon::parse($value)->format('o-m-d'),
            set: fn($value) => new Carbon($value)
        );
    }

    protected function countryId(): Attribute {
        return Attribute::set(set: function ($value, $attributes) {
            $country = Country::where("id", $value)->first();
            $attributes["location"] = $country?->name;
            $attributes["country_id"] = $value;

            return $attributes;
        });
    }

    protected function degree(): Attribute {
        return Attribute::make(
            get: function ($val): mixed {
                if (isset($val)) {
                    $degree = DegreeLevel::where('name', 'like', "%{$val}%")
                        ->orWhere('id', '=', $val)
                        ->first();

                    return $degree;
                } else {
                    return $val;
                }
            },

            set: function ($value): mixed {
                $degree = DegreeLevel::where("id", $value)->first();
                return $degree?->name;
            });
    }

    protected function currency(): Attribute {
        return Attribute::get(get: fn($val) => $val ?? 'pkr');

    }

    protected function careerLevel(): Attribute {
        return Attribute::get(get: function ($val) {

            if (isset($val)) {
                $careerLevel = Cache::remember("careerLevel-{$val}", now()->addDay(), fn() => CareerLevel::where('name', 'like', $val)->first());
                return $careerLevel->id;
            } else {
                return $val;
            }
        });
    }










}
