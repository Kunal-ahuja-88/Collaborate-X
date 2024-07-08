import { Button } from "@/components/ui/button";
import Image from "next/image";

export const EmptyFavorites = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <Image 
            src="/empty.png"
            alt="empty-search"
            width={200}
            height={200}
            />
            <h2 className="text-2xl font-semibold mt-6">
                No favorite boards
            </h2>
            <p className="text-muted-foreground textg-sm mt-2"> 
              Try favorite boards !
            </p>
            <div className="mt-6">
          <Button className="lg">
             Create Board
          </Button>
            </div>
        </div>
    )
}