export default function ImagePreview({ image, name }: { image: string; name: string }) {
    return (
        <div className="mx-auto">
            <img src={`/storage/${image}`} alt={name} className="size-36 rounded-full border-4 border-white" />
        </div>
    );
}
