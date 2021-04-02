/**
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import { globalVariables } from "@library/styles/globalStyleVars";
import { flexHelper, singleBorder, userSelect } from "@library/styles/styleHelpers";
import { ColorsUtils } from "@library/styles/ColorsUtils";
import { styleUnit } from "@library/styles/styleUnit";
import { styleFactory, variableFactory } from "@library/styles/styleUtils";
import { useThemeCache } from "@library/styles/themeCache";
import { border, calc, percent, px, translateX } from "csx";
import { titleBarVariables } from "@library/headers/TitleBar.variables";
import { panelLayoutVariables } from "@library/layout/PanelLayout.variables";
import { frameVariables } from "@library/layout/frame/frameStyles";
import { shadowHelper } from "@library/styles/shadowHelpers";
import { Mixins } from "@library/styles/Mixins";

export const mobileDropDownVariables = useThemeCache(() => {
    const globalVars = globalVariables();
    const titleBarVars = titleBarVariables();
    const mixBgAndFg = globalVars.mixBgAndFg;
    const vars = variableFactory("mobileDropDown");

    const title = vars("title", {
        letterSpacing: -0.26,
        maxWidth: calc(`100% - ${px(titleBarVars.endElements.flexBasis * 2)}`),
        lineHeight: 2,
    });
    const chevron = vars("chevron", {
        width: 8,
        height: 8,
        color: mixBgAndFg(0.7),
    });

    const header = vars("header", {
        minHeight: titleBarVars.sizing.mobile,
    });

    const padding = vars("padding", {
        horizontal: 2,
    });

    const side = vars("side", {
        width: globalVars.icon.sizes.default + padding.horizontal,
    });

    return {
        title,
        chevron,
        header,
        padding,
        side,
    };
});

export const mobileDropDownClasses = useThemeCache(() => {
    const vars = mobileDropDownVariables();
    const globalVars = globalVariables();
    const frameVars = frameVariables();
    const titleBarVars = titleBarVariables();
    const mediaQueries = panelLayoutVariables().mediaQueries();
    const flex = flexHelper();
    const style = styleFactory("mobileDropDown");

    const root = style({
        ...flex.middle(),
        position: "relative",
        flexGrow: 1,
    });

    const modal = style("modal", {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        ...{
            ".siteNav": {
                paddingLeft: px(globalVars.gutter.half),
            },
            "&.modal": {
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
            },
        },
    });

    const panel = style("panel", {
        position: "relative",
        maxHeight: percent(100),
        padding: px(0),
    });

    const toggleButton = style(
        "toggleButton",
        {
            ...flex.middle(),
            ...userSelect(),
            flexGrow: 1,
            maxWidth: calc(`100% - ${px(globalVars.spacer.size)}`),
            marginLeft: px(globalVars.spacer.size / 2),
            marginRight: px(globalVars.spacer.size / 2),
            outline: 0,
        },
        mediaQueries.xs({
            maxWidth: percent(100),
            margin: 0,
            padding: px(0),
        }),
    );

    const buttonContents = style("buttonContents", {
        display: "flex",
        position: "relative",
        lineHeight: 1.5,
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: percent(100),
    });

    const title = style(
        "title",
        {
            display: "inline-flex",
            letterSpacing: vars.title.letterSpacing,
            fontWeight: globalVars.fonts.weights.semiBold,
            textAlign: "center",
            lineHeight: vars.title.lineHeight,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
        },
        mediaQueries.xs({
            textAlign: "left",
        }),
    );

    const icon = style("icon", {
        display: "inline-flex",
        maxHeight: percent(100),
        maxWidth: percent(100),
        margin: `auto 0`,
        height: vars.chevron.height,
        width: vars.chevron.width,
    });

    const closeModalIcon = style("closeModalIcon", {
        padding: px(0),
        margin: "auto",
        color: vars.chevron.color.toString(),
        ...{
            "&:hover": {
                color: ColorsUtils.colorOut(globalVars.mainColors.primary),
            },
            "&:active": { color: ColorsUtils.colorOut(globalVars.mainColors.primary) },
            "&:focus": { color: ColorsUtils.colorOut(globalVars.mainColors.primary) },
        },
    });

    const closeModal = style("closeModal", {
        width: percent(100),
        height: percent(100),
    });

    const headerSizing = {
        height: styleUnit(vars.header.minHeight.height),
        width: percent(100),
    };

    const header = style("header", {
        ...shadowHelper().embed(),
        background: ColorsUtils.colorOut(frameVars.colors.bg),
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10000,
    });

    const headerContent = style("headerContent", {
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        margin: "auto",
        height: styleUnit(vars.header.minHeight.height),
    });

    const headerSpacer = style("headerSpacer", {
        ...headerSizing,
    });

    const closeWidth =
        Math.floor(globalVars.icon.sizes.xSmall) + 2 * (globalVars.gutter.half + globalVars.gutter.quarter);
    const closeButton = style("closeButton", {
        ...Mixins.absolute.middleLeftOfParent(),
        height: styleUnit(closeWidth),
        width: styleUnit(closeWidth),
        minWidth: styleUnit(closeWidth),
        padding: 0,
        transform: translateX("-50%"),
    });

    const subTitle = style("subTitle", {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "uppercase",
        minHeight: styleUnit(titleBarVars.sizing.height - 4),
        fontSize: styleUnit(globalVars.fonts.size.small),
        textOverflow: "ellipsis",
        ...Mixins.padding({
            vertical: styleUnit(4),
        }),
        ...Mixins.font({
            size: globalVars.fonts.size.small,
            transform: "uppercase",
            color: globalVars.mixBgAndFg(0.6),
        }),
    });

    const listContainer = style("listContainer", {
        borderBottom: singleBorder(),
    });

    return {
        root,
        modal,
        panel,
        toggleButton,
        buttonContents,
        closeButton,
        title,
        icon,
        closeModalIcon,
        closeModal,
        header,
        headerContent,
        headerSpacer,
        listContainer,
        subTitle,
    };
});
