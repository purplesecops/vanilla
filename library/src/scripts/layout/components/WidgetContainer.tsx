/*
 * @author Stéphane LaFlèche <stephane.l@vanillaforums.com>
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import React from "react";
import className from "classnames";

export interface IContainer {
    className?: string;
    children?: React.ReactNode;
    tag?: keyof JSX.IntrinsicElements;
}

/*
 * Implements "WidgetContainer" component used to set a smaller max width than the Container component
 */
export default class WidgetContainer extends React.Component<IContainer> {
    public static defaultProps = {
        tag: "div",
    };

    public render() {
        if (this.props.children) {
            const Tag = this.props.tag || "div";
            return <Tag className={className(this.props.className)}>{this.props.children}</Tag>;
        } else {
            return null;
        }
    }
}
