@foreach ($educations as $education)
    <div
        class="relative mt-3 pl-5 before:absolute before:top-2 before:left-[1px] before:h-full before:w-[1px] before:bg-gray-400/60">
        <div class="flex justify-between">
            <h1
                class="relative font-montserrat text-xl font-bold before:absolute before:top-1 before:-left-6 before:z-[1] before:size-3 before:rounded-full before:bg-gray-500/80">
                {{$education['title']}}
            </h1>

        </div>
        <p class="my-2 font-semibold">
            {{$education['year']}} -
            {{ $education['city']['name'] ? $education['city']['name'] . $education['country']['name'] : $education['country']['name'] }}
        </p>
        <span class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1em" height="1em" class="text-primary">
                <path fill="currentColor"
                    d="M20.588 7.014a6.25 6.25 0 0 1 6.824 0l16.02 10.44a1.25 1.25 0 0 1 0 2.094l-16.02 10.44a6.25 6.25 0 0 1-6.824 0L6.5 20.808V31.75a1.25 1.25 0 0 1-2.5 0V18.5c0-.453.242-.852.605-1.07zM11 35.75v-9.623l8.496 5.536a8.25 8.25 0 0 0 9.008 0L37 26.127v9.623q0 .12-.005.238a1.25 1.25 0 0 1-.372.844A17.95 17.95 0 0 1 24 42a17.95 17.95 0 0 1-12.623-5.168a1.25 1.25 0 0 1-.373-.844A6 6 0 0 1 11 35.75">
                </path>
            </svg>

            {{$education['title']}}
        </span>
        <span class="flex items-center gap-1 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" class="text-primary">
                <path fill="currentColor"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5">
                </path>
            </svg>

            {{ $education['city']['name'] ? $education['city']['name'] . $education['country']['name'] : $education['country']['name']}}
        </span>
        <span class="flex items-center gap-1 font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="1em" height="1em" class="text-primary">
                <path fill="currentColor" d="M7.5 8a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></path>
                <path fill="currentColor" fillRule="evenodd"
                    d="m12 6.191l-4-2V3h3V0H7v4.191l-4 2V8H1v6H0v1h6v-4h3v4h6v-1h-1V8h-2zM13 14V9h-1v5zM3 14H2V9h1zm3-5.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"
                    clipRule="evenodd"></path>
                <path fill="currentColor" d="M8 15v-3H7v3z"></path>
            </svg>

            {{$education['institution']}}
        </span>
    </div>

@endforeach