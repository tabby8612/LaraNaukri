import { Upload } from 'lucide-react';
import { ChangeEvent, useState } from 'react';
import { Card } from '../card';
import { Label } from '../UnusedUI/label';

type Props = { profileImage: string; label: string; name: string };

export default function CustomUploadField({ profileImage, label, name }: Props) {
    const [photoImg, setProfileImg] = useState({
        src: `/storage/${profileImage}`,
        name: '',
    });

    function handleProfilePhoto(e: ChangeEvent<HTMLInputElement>) {
        const filePreview = URL.createObjectURL(e.target.files![0]);
        // setData('image_path', e.target.files![0]);

        setProfileImg({
            src: filePreview,
            name: e.target.files![0].name,
        });
    }

    return (
        <Card className="w-full items-center gap-4 rounded-none border-gray-300 bg-white px-3 shadow-none">
            <Label>{label}</Label>
            <img src={photoImg.src} alt={photoImg.name} className="size-28" />
            <p>{photoImg.name}</p>
            <div className="relative flex items-center justify-center gap-2 border-4 border-dashed border-gray-400 px-20 py-3 text-gray-500">
                <Upload />
                <p className="font-bold uppercase">Select {label}</p>
                <input
                    type="file"
                    name={name}
                    accept="images/*"
                    className="absolute top-0 left-0 size-full cursor-pointer bg-green-500 opacity-0"
                    onChange={(e) => handleProfilePhoto(e)}
                />
            </div>
        </Card>
    );
}
