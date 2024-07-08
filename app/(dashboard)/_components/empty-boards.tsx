import Image from "next/image";

export const EmptyBoards = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image 
            src="/notes.png"
            alt="empty-search"
            width={160}
            height={160}
            />
            <h2 className="text-2xl font-semibold mt-6">
                Create your first board
            </h2>
            <p className="text-muted-foreground textg-sm mt-2"> 
              Start bt creating a board for your organization !
            </p>
        </div>
    )
}