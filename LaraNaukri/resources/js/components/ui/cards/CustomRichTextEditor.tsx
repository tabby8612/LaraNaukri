import { Label } from '@radix-ui/react-label';
import { Editor, EditorContent, useEditor, useEditorState } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { List, Redo, Undo } from 'lucide-react';
import { useEffect, useState } from 'react';
import AIJobDescriptionGenerator from '../AIJobDescriptionGenerator';

type CustomProps = {
    name: string;
    isrequired?: boolean;
    label: string;
    value: string;
    showAIGenerator?: boolean;
    jobTitle?: string;
    onUpdateFn: (content: string) => void;
};
export default function CustomRichTextEditor({ name, isrequired = false, label, value, showAIGenerator = false, jobTitle, onUpdateFn }: CustomProps) {
    const [content, setContent] = useState(value);

    const editor = useEditor({
        extensions: [StarterKit],
        content: content,
        onUpdate: ({ editor }: { editor: Editor }) => onUpdateFn(editor.getHTML()),
        immediatelyRender: false,
    });

    useEffect(() => {
        if (editor && content !== editor.getHTML()) {
            editor.commands.setContent(content, {
                emitUpdate: true,
            });
        }
    }, [content, editor]);

    if (!editor) return null;

    function MenuBar({ editor }: { editor: Editor }) {
        const editorState = useEditorState({
            editor,
            selector: (ctx) => {
                return {
                    isBold: ctx.editor.isActive('bold') ?? false,
                    canBold: ctx.editor.can().chain().toggleBold().run() ?? false,
                    isItalic: ctx.editor.isActive('italic') ?? false,
                    canItalic: ctx.editor.can().chain().toggleItalic().run() ?? false,
                    isStrike: ctx.editor.isActive('strike') ?? false,
                    canStrike: ctx.editor.can().chain().toggleStrike().run() ?? false,
                    isParagraph: ctx.editor.isActive('paragraph') ?? false,
                    isHeading1: ctx.editor.isActive('heading', { level: 1 }) ?? false,
                    isHeading2: ctx.editor.isActive('heading', { level: 2 }) ?? false,
                    isHeading3: ctx.editor.isActive('heading', { level: 3 }) ?? false,
                    isHeading4: ctx.editor.isActive('heading', { level: 4 }) ?? false,
                    isHeading5: ctx.editor.isActive('heading', { level: 5 }) ?? false,
                    isHeading6: ctx.editor.isActive('heading', { level: 6 }) ?? false,
                    isBulletList: ctx.editor.isActive('bulletList') ?? false,
                    isOrderedList: ctx.editor.isActive('orderedList') ?? false,
                    isCodeBlock: ctx.editor.isActive('codeBlock') ?? false,
                    isBlockquote: ctx.editor.isActive('blockquote') ?? false,
                    canUndo: ctx.editor.can().chain().undo().run() ?? false,
                    canRedo: ctx.editor.can().chain().redo().run() ?? false,
                };
            },
        });

        return (
            <div className="control-group">
                <div className="button-group flex items-center rounded-t bg-primary">
                    <button onClick={() => editor.chain().focus().toggleBold().run()} disabled={!editorState.canBold}>
                        <p className={`${editorState.isBold && 'bg-black font-black'} cursor-pointer rounded-tl px-2.5 py-1 font-bold text-white`}>
                            B
                        </p>
                    </button>
                    <button onClick={() => editor.chain().focus().toggleItalic().run()} disabled={!editorState.canItalic}>
                        <p className={`${editorState.isItalic && 'bg-black italic'} cursor-pointer px-2.5 py-1 font-bold text-white`}>I</p>
                    </button>
                    <button onClick={() => editor.chain().focus().toggleStrike().run()} disabled={!editorState.canStrike}>
                        <p className={`${editorState.isStrike && 'bg-black line-through'} cursor-pointer px-2.5 py-1 font-bold text-white`}>S</p>
                    </button>
                    <button onClick={() => editor.chain().focus().setParagraph().run()}>
                        <p className={`${editorState.isParagraph && 'bg-black'} cursor-pointer px-2.5 py-1 font-bold text-white`}>P</p>
                    </button>
                    <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
                        <p className={`${editorState.isHeading1 && 'bg-black'} cursor-pointer px-2.5 py-1 font-bold text-white`}>H1</p>
                    </button>
                    <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
                        <p className={`${editorState.isHeading2 && 'bg-black'} cursor-pointer px-2.5 py-1 font-bold text-white`}>H2</p>
                    </button>
                    <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
                        <p className={`${editorState.isHeading3 && 'bg-black'} cursor-pointer px-2.5 py-1 font-bold text-white`}>H3</p>
                    </button>
                    <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
                        <List className={`${editorState.isBulletList && 'bg-black'} h-[32px] w-9 cursor-pointer px-2 font-bold text-white`} />
                    </button>
                    <button onClick={() => editor.chain().focus().undo().run()}>
                        <Undo className={`${editorState.canUndo && 'bg-black'} size-8 cursor-pointer px-2 font-bold text-white`} />
                    </button>
                    <button onClick={() => editor.chain().focus().undo().run()}>
                        <Redo className={`${editorState.canRedo && 'bg-black'} size-8 cursor-pointer px-2 font-bold text-white`} />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full">
            <Label htmlFor={name} className={`tracking-wider text-gray-500 ${isrequired && "after:ml-0.5 after:text-red-500 after:content-['*']"} `}>
                {label}
            </Label>
            <div className="relative w-full rounded focus-within:outline-2 focus-within:outline-primary">
                <MenuBar editor={editor} />
                <EditorContent editor={editor} required={isrequired} className="relative" />

                {showAIGenerator && <AIJobDescriptionGenerator jobTitle={jobTitle ?? ''} onUpdateFn={setContent} />}
            </div>
        </div>
    );
}
