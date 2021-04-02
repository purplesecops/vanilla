/**
 * @copyright 2009-2021 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */
import { globalVariables } from "@library/styles/globalStyleVars";
import { variableFactory } from "@library/styles/styleUtils";
import { useThemeCache } from "@library/styles/themeCache";
import { Variables } from "@library/styles/Variables";
import { IThemeVariables } from "@library/theming/themeReducer";
import { BorderType } from "@library/styles/styleHelpersBorders";
import { IBoxOptions } from "@library/styles/cssUtilsTypes";
import { DeepPartial } from "redux";
import { ButtonTypes } from "@library/forms/buttonTypes";
import { panelLayoutVariables } from "@library/layout/PanelLayout.variables";
import { media } from "typestyle";

export interface ICallToActionOptions {
    box: IBoxOptions;
    linkButtonType: ButtonTypes;
    imagePlacement?: "top" | "left";
    alignment?: "center" | "left";
}

/**
 * @varGroup callToAction
 * @description Call To Action(CTA) is a component.
 */
export const callToActionVariables = useThemeCache(
    (optionOverrides?: DeepPartial<ICallToActionOptions>, forcedVars?: IThemeVariables) => {
        const makeVars = variableFactory("callToAction");
        const globalVars = globalVariables();

        const options: ICallToActionOptions = makeVars(
            "options",
            {
                /**
                 * @varGroup callToAction.options.box
                 * @expand box
                 */
                box: Variables.box({
                    borderType: BorderType.BORDER,
                }),
                linkButtonType: ButtonTypes.STANDARD,
                alignment: "left" as "left" | "center",
                imagePlacement: "top" as "top" | "left",
            },
            optionOverrides,
        );

        const isAlignmentCenter = options.alignment === "center";

        /**
         * @varGroup callToAction.title
         */
        const title = makeVars("title", {
            /**
             * @varGroups callToAction.title.font
             * @expand font
             */
            font: Variables.font({
                size: globalVars.fonts.size.subTitle,
                weight: globalVars.fonts.weights.bold,
                color: globalVars.mainColors.fg,
            }),
            /**
             * @varGroups callToAction.title.spacing
             * @expand spacing
             */
            spacing: Variables.spacing({
                bottom: 16,
            }),
        });

        /**
         * @varGroup callToAction.description
         */
        const description = makeVars("description", {
            /**
             * @varGroups callToAction.description.font
             * @expand font
             */
            font: Variables.font({
                size: globalVars.fonts.size.medium,
                weight: globalVars.fonts.weights.normal,
                color: globalVars.mainColors.fg,
            }),
            /**
             * @varGroups callToAction.description.spacing
             * @expand spacing
             */
            spacing: Variables.spacing({
                bottom: 16,
            }),
        });

        const link = {
            spacing: Variables.spacing({
                horizontal: 8,
                top: 12,
            }),
        };

        const isImageLeft = options.imagePlacement === "left";
        const layoutVars = panelLayoutVariables(forcedVars);
        const minWidth = layoutVars.contentSizes.full / 4 - layoutVars.gutter.size * 5; // Min width allows 4 items to fit.
        const image = makeVars("image", {
            /**
             * @var callToAction.image.ratio
             * @description Aspect ratio of the call to action image.
             * @title Aspect Ratio
             */
            ratio: {
                /**
                 * @var callToAction.image.ratio.height
                 * @title Image Height
                 * @description Height of image
                 * @type number
                 */
                height: isImageLeft ? 16 : 9,

                /**
                 * @var callToAction.image.ratio.width
                 * @title Image Width
                 * @description Width of image
                 * @type number
                 */
                width: 16,
            },
            /**
             * @var callToAction.image.maxHeight
             * @title Maximum Image Height
             * @type number
             */
            maxHeight: isImageLeft ? undefined : 250,
            /**
             * @var callToAction.image.maxWidth
             * @title Maximum Image Width
             * @type number|string
             */
            maxWidth: undefined,
        });

        /**
         * @varGroups callToAction.sizing
         */
        const sizing = makeVars("sizing", {
            minWidth: minWidth, // Min width allows 4 items to fit.
        });

        const breakPoints = makeVars("breakPoints", {
            oneColumn: globalVars.foundationalWidths.breakPoints.xs,
        });

        const mediaQueries = () => {
            const oneColumn = (styles) => {
                return media({ maxWidth: breakPoints.oneColumn }, styles);
            };

            return { oneColumn };
        };
        return {
            options,
            title,
            description,
            image,
            sizing,
            mediaQueries,
            link,
        };
    },
);
