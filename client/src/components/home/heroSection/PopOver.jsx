import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const PopOver = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">5 adults · 0 children · 1 room</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Members</h4>
                        <p className="text-sm text-muted-foreground">
                            Add the data of members.
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="adults">Adults</Label>
                            <Input
                                id="adults"
                                defaultValue="2"
                                className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="childrens">Childrens</Label>
                            <Input
                                id="childrens"
                                defaultValue="2"
                                className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="rooms">Rooms</Label>
                            <Input
                                id="rooms"
                                defaultValue="1"
                                className="col-span-2 h-8"
                            />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                            <Label htmlFor="pets">Pets</Label>
                            <Input
                                id="pets"
                                defaultValue="none"
                                className="col-span-2 h-8"
                            />
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
export default PopOver
