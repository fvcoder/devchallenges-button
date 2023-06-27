import classNames from "classnames";
import { PropsWithChildren } from "react";
import "./button.css"

export interface ButtonProps {
    size?: "sm" | "md" | "lg";
    disabled?: boolean
    disableShadow?: boolean;
    variant?: "fill" | "outline" | "text" | "base";
    color?: "default" | "primary" | "secondary" | "danger"
    startIcon?: string
    endIcon?: string

    // developer only
    manualFocus?: boolean
}

export function Button(props: PropsWithChildren<ButtonProps>) {
    return <button className={classNames("btn", {
        "btn-sm": props.size && props.size === "sm",
        "btn-md": !props.size || props.size === "md",
        "btn-lg": props.size && props.size === "lg",
        "btn-shadow": !props.disableShadow,
        "btn-base": !props.variant || props.variant === "base",
        "btn-fill": props.variant && props.variant === "fill",
        "btn-outline": props.variant && props.variant === "outline",
        "btn-text": props.variant && props.variant === "text",

        "dev-focus":  props.manualFocus
    })} disabled={props.disabled ?? false}>{props.children}</button>
}