const Size = () => {
    const sizes = [30, 50, 80, 100, 150, 200];
    return (
        <div className="flex py-20 items-end">
            {sizes.map((size, index) => (
                <div
                    style={{ width: `${size}px`, height: `${size}px` }}
                    className="border bg-black rounded-full"
                    key={index}
                ></div>
            ))}
        </div>
    );
};

export default Size;
