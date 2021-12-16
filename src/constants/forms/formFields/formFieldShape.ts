export interface formFieldShape {
    props: {
        id: string;
        name: string;
        label?: string;
        type: string;
        placeholder?: string;
    };
    validation?: object;
}
