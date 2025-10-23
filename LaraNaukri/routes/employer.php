<?php

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\CompanyJobController;
use App\Http\Controllers\CompanyMessageController;
use App\Http\Controllers\CompanyPackageController;
use App\Http\Controllers\CompanyPaymentController;
use App\Http\Controllers\JobController;
use App\Models\Company;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix("employer")->name("employer.")->middleware("IsEmployer")->group(function () {

    Route::get("dashboard", [CompanyController::class, 'dashboard'])->name('dashboard');
    Route::get("edit-profile", [CompanyController::class, 'showEditPage'])->name('editProfile');
    Route::post("edit-profile", [CompanyController::class, 'store'])->name('store');


    Route::get("post-job", [JobController::class, 'create'])->name('postJob');
    Route::post("post-job", [JobController::class, 'store'])->name('postJob');


    Route::get("manage-jobs", [CompanyController::class, 'manageJobs'])->name('manageJobs');

    Route::get("list-applied-users/{job}", [CompanyJobController::class, 'kanbanBoard'])->name('listAppliedUsers');
    Route::put('update-application-status/{application}', [CompanyJobController::class, 'updateApplicationStatus'])->name("updateApplicationStatus");


    Route::get("edit-job/{job}", [CompanyJobController::class, 'edit'])->name('editJob');
    Route::put("edit-job/{job}", [CompanyJobController::class, 'update'])->name('editJob');

    Route::get("delete-job/{job}", [CompanyJobController::class, 'destroy'])->name('deleteJob');



    Route::get("company-packages", [CompanyPackageController::class, 'cvPackage'])->name('packages');
    Route::get("payment-history", [CompanyPackageController::class, 'jobPackages'])->name('paymentHistory');

    Route::get("paypal-package/{package}", [CompanyPaymentController::class, 'PaypalPackage'])->name('paypal');
    Route::get("paypal-payment-success", [CompanyPaymentController::class, 'paypalSuccess'])->name("paypal.success");
    Route::get("paypal-payment-failed", [CompanyPaymentController::class, 'paypalFail'])->name("paypal.fail");

    Route::get("stripe-package/{package}", [CompanyPaymentController::class, 'StripePackage'])->name('stripe');
    Route::get("stripe-payment-success", [CompanyPaymentController::class, 'stripeSuccess'])->name("stripe.success");
    Route::get("stripe-payment-failed", [CompanyPaymentController::class, 'stripeFail'])->name("stripe.fail");


    Route::get("unlocked-users", [CompanyController::class, 'unlockedUsers'])->name('unlockedUsers');
    Route::post("unlock-user/{user}", [CompanyController::class, 'unlockUser'])->name('unlockUser');


    Route::get("followings", [CompanyController::class, 'followers'])->name('followings');

    Route::get("messages", [CompanyMessageController::class, 'index'])->name('messages');
    Route::post('send-message', [CompanyMessageController::class, 'store'])->name('send.message');
    Route::get("messages/{candidate}", [CompanyMessageController::class, 'messages'])->name('get.messages');

    Route::get("logout", [CompanyController::class, 'logout'])->name('logout');

});

Route::get("user-profile/{user}", [CompanyController::class, 'userProfile'])->name('userProfile')->middleware("IsEmployer");


