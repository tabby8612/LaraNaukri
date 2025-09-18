<div id="skills-details" class="">
    <h1 class="font-montserrat text-xl font-bold text-white">Key Skills</h1>
    <hr class="my-3 h-0.5 rounded-2xl bg-white/50" />
    <ul class="flex list-disc flex-wrap text-white">
        @foreach ($skills as $skill)
            <li class="mx-3 mt-2 rounded-full bg-gray-300 px-2 py-1 text-sm text-black">
                {{ $skill['skill']['name'] }}
            </li>
        @endforeach

    </ul>
</div>