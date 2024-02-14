import { Room } from "@/components/Room";
import { Canvas } from "@/components/board/Canvas";
import { Loading } from "@/components/board/Loading";

interface PageProps {
    params: {
        boardId: string;
    }
}

const Page = ({ params }: PageProps) => {
    return (
        <Room roomId={params.boardId} fallback={<Loading />}>
            <Canvas boardId={params.boardId} />
        </Room>
    );
};

export default Page;
