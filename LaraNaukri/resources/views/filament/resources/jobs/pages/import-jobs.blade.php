<x-filament-panels::page>
    {{-- Page content --}}

    <div class="p-2 bg-green-100 text-green-800 text-sm rounded-lg text-center">
        <p><span class="font-bold">Note: </span>After importing the .CSV file, you must move the jobs to Active/Live
            status. Jobs in this listing will
            not appear on the frontend until they are activated.
        </p>
    </div>

    <div class="mt-3">
        {{ $this->table }}
    </div>
</x-filament-panels::page>