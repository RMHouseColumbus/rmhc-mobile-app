import React from 'React';

declare module "*.svg" {
    import { SvgProps } from "react-native-svg";
    const content: React.Component<SvgProps, {}>;
    export default content;
}