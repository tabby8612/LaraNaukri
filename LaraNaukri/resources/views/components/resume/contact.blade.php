<div id="contact-details">
    <h1 class="font-montserrat text-xl font-bold text-white">Contact Details</h1>
    <hr class="h-0.5 rounded-2xl bg-white/50" />
    <div class="mt-2 flex items-center gap-2 text-lg text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" class="size-5 text-white">
            <path fill="currentColor"
                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z">
            </path>
        </svg>
        <p class="text-sm">{{ $phone }}</p>
    </div>
    <div class="mt-2 flex items-center gap-2 text-lg text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-smartphone-icon lucide-smartphone size-5 text-white">
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
        </svg>

        <p class="text-sm">{{ $mobile }}</p>
    </div>
    <div class="mt-2 flex items-center gap-2 text-lg text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" class="size-5 text-white">
            <path fill="currentColor"
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z">
            </path>
        </svg>
        <p class="text-sm">{{ $email }}</p>
    </div>
    <div class="mt-2 flex items-center gap-2 text-lg text-white">

        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-globe-icon lucide-globe size-5 text-white">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
        <p class="text-sm">
            {{ $city }} - {{ $country }}
        </p>
    </div>
    <div class="mt-2 flex items-center gap-2 text-lg text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" class="size-5 text-white">
            <path fill="currentColor"
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5">
            </path>
        </svg>

        <p class="text-sm">{{ $address }}</p>
    </div>
</div>