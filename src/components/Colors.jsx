
const Colors = () => {
    const colors = ["red", "green", "yellow", "blue", "gray", "purple", "black"];
    return (
        <div className="flex space-x-5">
            {colors.map((color, index) => (
                <div
                    key={index}
                    style={{ backgroundColor: `${color}` }}
                    className="w-28 h-28 rounded-full flex justify-center items-center"
                ></div>
            ))}
        </div>
    );
};

export default Colors;
