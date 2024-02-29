import { Book, Bookmark, Circle, Hexagon, Square } from "react-feather";

const Icons = () => {
    return (
        <div>
            <div className="flex space-x-5">
                <Square color="black" size={128}></Square>
                <Circle color="black" size={128}></Circle>
                <Hexagon color="black" size={128}></Hexagon>
                <Book color="black" size={128}></Book>
                <Bookmark color="black" size={128}></Bookmark>
            </div>
        </div>
    );
};

export default Icons;
