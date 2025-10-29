export default function GoogleMap({ place }: { place: string }) {
    return (
        <iframe
            className="map-top h-96 w-full"
            width="598"
            height="450"
            src={`https://maps.google.com/maps?q=${place}&output=embed`}
            allowFullScreen
        ></iframe>
    );
}
