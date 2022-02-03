import React from 'react';

const AddClassName: React.FC<{ className: string }> = ({
    children,
    className,
}) => {
    const StyledChildren = React.Children.map(children, (child) => {
        if (!child || !React.isValidElement(child)) return null;

        return React.cloneElement(child, {
            className: `${child.props.className ?? ''} ${className}`,
        });
    });

    return <>{StyledChildren}</>;
};

export default AddClassName;
