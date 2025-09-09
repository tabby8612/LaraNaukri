import CustomTextArea from '@/components/ui/cards/CustomTextArea';

type Props = {
    videoProfile: string;
    setData: (att: string, val: string) => void;
};
export default function EditProfileVideo({ videoProfile, setData }: Props) {
    return (
        <>
            <h1 className="font-montserrat text-2xl font-bold">Add Video Profile</h1>
            <div className="mt-3 gap-3">
                <CustomTextArea
                    label="Video Link - sample: https://www.youtube.com/embed/538cRSPrwZU"
                    name="video-links"
                    value={videoProfile}
                    onChange={(e) => setData('video_profile', e.target.value)}
                />
            </div>
            <hr className="my-7 rounded-2xl border border-gray-300" />
        </>
    );
}
