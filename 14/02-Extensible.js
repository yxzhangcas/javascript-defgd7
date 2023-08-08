let o = Object.seal(
    Object.create(
        Object.freeze(
            {x: 1}
        ),
        {
            y: {
                value: 2,
                writable: true
            }
        }
    )
);