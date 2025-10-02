import { Input } from "@/components/ui/input"
import Image from "next/image"


export default function ImageUploader({inputFileRef, appelation}: { inputFileRef: React.RefObject<HTMLInputElement | null> , appelation: string | undefined }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Photo</label>
      <div className="flex items-center gap-2">
      <div>
        <Image src="/wine-hero.jpg" alt="Wine hero" width={200} height={200} className="rounded-lg w-16 h-12" />
      </div>
      <Input
        className="bg-white"
        type="file"
        ref={inputFileRef}
        accept="image/*"
      />
      <div></div>
      </div>
    </div>)
}
