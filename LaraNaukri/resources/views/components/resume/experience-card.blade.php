@foreach ($experiences as $experience)
    <div id="experience-card" key={experience.id}
        class="relative mt-3 pl-5 before:absolute before:top-2 before:left-0.5 before:h-full before:w-[1px] before:bg-gray-400/20">
        <div class="flex justify-between">
            <h1
                class="relative font-montserrat text-xl font-bold before:absolute before:top-1 before:-left-6 before:z-[1] before:size-3 before:rounded-full before:bg-gray-400/80">
                {{$experience['title']}}
            </h1>

        </div>
        <span class="flex items-center gap-1">
            <Location class="text-primary" />
            {{$experience['country']['name']}}
        </span>
        <span class="flex items-center gap-1 font-bold">
            <BuildingSolid class="text-primary" />
            {{$experience['city']['name']}}
        </span>
        <span class="flex items-center gap-1 font-bold">
            <CalendarSharp class="text-primary" />
            {{$experience['start_date']}} - {{$experience['is_working'] ? 'Currently Working' : $experience['end_date']}}
        </span>
        <p class="text-gray-400">{{$experience['description']}}</p>
    </div>

@endforeach