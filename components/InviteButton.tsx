import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import { OrganizationProfile } from "@clerk/nextjs";

export const InviteButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Invite Members
                </Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none w-fit max-w-[880px]">
                <OrganizationProfile />
            </DialogContent>
        </Dialog>
    );
};
