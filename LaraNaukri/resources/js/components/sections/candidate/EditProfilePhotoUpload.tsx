import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/UnusedUI/label';
import { Upload } from 'lucide-react';
import { ChangeEvent, useState } from 'react';

type Props = {
    profileImage: string;
    coverImage: string;
    setData: (attribute: string, value: File) => void;
};
export default function EditProfilePhotoUpload({ profileImage, coverImage, setData }: Props) {
    const [photoImg, setProfileImg] = useState({
        src: `/storage/${profileImage}`,
        name: '',
    });
    const [coverImg, setCoverImg] = useState({
        src: `/storage/${coverImage}`,
        name: '',
    });

    function handleProfilePhoto(e: ChangeEvent<HTMLInputElement>) {
        const filePreview = URL.createObjectURL(e.target.files![0]);
        setData('image_path', e.target.files![0]);

        setProfileImg({
            src: filePreview,
            name: e.target.files![0].name,
        });
    }
    function handleCoverPhoto(e: ChangeEvent<HTMLInputElement>) {
        const filePreview = URL.createObjectURL(e.target.files![0]);
        setData('cover_image_path', e.target.files![0]);

        setCoverImg({
            src: filePreview,
            name: e.target.files![0].name,
        });
    }

    return (
        <>
            <Card className="w-full items-center gap-4 rounded-none border-gray-300 bg-white px-3 shadow-none">
                <Label>Profile Image</Label>
                <img src={photoImg.src} alt={photoImg.name} className="size-28" />
                <p>{photoImg.name}</p>
                <div className="relative flex items-center justify-center gap-2 border-4 border-dashed border-gray-400 px-20 py-3 text-gray-500">
                    <Upload />
                    <p className="font-bold uppercase">Select Profile Photo</p>
                    <input
                        type="file"
                        name="image_path"
                        accept="images/*"
                        className="absolute top-0 left-0 size-full cursor-pointer bg-green-500 opacity-0"
                        onChange={(e) => handleProfilePhoto(e)}
                    />
                </div>
            </Card>
            <Card className="w-full items-center gap-4 rounded-none border-gray-300 bg-white px-3 shadow-none">
                <Label>Cover Image</Label>
                <img src={coverImg.src} alt={coverImg.name} className="h-28 w-10/12" />
                <p>{coverImg.name}</p>
                <div className="relative flex items-center justify-center gap-2 border-4 border-dashed border-gray-400 px-20 py-3 text-gray-500">
                    <Upload />
                    <p className="font-bold uppercase">Select Cover Photo</p>
                    <input
                        type="file"
                        name="cover_image_path"
                        accept="images/*"
                        className="absolute top-0 left-0 size-full cursor-pointer bg-green-500 opacity-0"
                        onChange={(e) => handleCoverPhoto(e)}
                    />
                </div>
            </Card>
        </>
    );
}
