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
    return (
        <button
            className={classNames("btn", {
                "btn-sm": props.size && props.size === "sm",
                "btn-md": !props.size || props.size === "md",
                "btn-lg": props.size && props.size === "lg",
                
                "btn-shadow": props.variant?.search(/outline|text/) ?? !props.disableShadow,

                "btn-fill": !props.variant || props.variant === "fill",
                "btn-text": props.variant && props.variant === "text",
                "btn-outline": props.variant && props.variant === "outline",

                "btn-primary": props.color === "primary",
                "btn-secondary": props.color === "secondary",
                "btn-danger": props.color === "danger",

                "dev-focus":  props.manualFocus
            })}
            disabled={props.disabled ?? false}
        >
            {props.children}
        </button>
    )
}