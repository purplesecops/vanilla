/**
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import { IBaseEmbedProps, IBaseEmbedData } from "@library/embeddedContent/embedService";
import { OpenApiEmbedPlaceholder } from "@openapi-embed/embed/OpenApiEmbedPlaceholder";
import { EmbedContainer, EmbedContainerSize } from "@vanilla/library/src/scripts/embeddedContent/EmbedContainer";
import { EmbedContent } from "@vanilla/library/src/scripts/embeddedContent/EmbedContent";
import Button from "@vanilla/library/src/scripts/forms/Button";
import { ButtonTypes } from "@vanilla/library/src/scripts/forms/buttonStyles";
import { EditIcon } from "@vanilla/library/src/scripts/icons/common";
import React, { useState } from "react";
import { OpenApiForm } from "@openapi-embed/embed/OpenApiForm";
import { useSwaggerUI, ISwaggerHeading } from "@openapi-embed/embed/swagger/useSwaggerUI";

export const OPEN_API_EMBED_TYPE = "openapi";

export interface IOpenApiEmbedData extends IBaseEmbedData {
    name: string;
    headings: ISwaggerHeading[];
}

interface IProps extends IBaseEmbedProps, IOpenApiEmbedData {
    name: string;
}

export function OpenApiEmbed(props: IProps) {
    const [showEditModal, setShowEditModal] = useState(false);

    if (props.inEditor) {
        return (
            <EmbedContainer size={EmbedContainerSize.FULL_WIDTH}>
                <EmbedContent
                    type="OpenApi"
                    embedActions={
                        <Button
                            baseClass={ButtonTypes.ICON}
                            onClick={() => {
                                setShowEditModal(true);
                            }}
                        >
                            <EditIcon />
                        </Button>
                    }
                >
                    <OpenApiEmbedPlaceholder data={props} />
                </EmbedContent>
                {showEditModal && (
                    <OpenApiForm
                        data={props}
                        onSave={data => {
                            props.syncBackEmbedValue?.(data);
                            setShowEditModal(false);
                        }}
                        onDismiss={() => {
                            setShowEditModal(false);
                        }}
                    />
                )}
            </EmbedContainer>
        );
    } else {
        return <FullOpenApiSpec {...props} />;
    }
}

function FullOpenApiSpec(props: IProps) {
    const { swaggerRef } = useSwaggerUI(props.url, true);

    return <div ref={swaggerRef}></div>;
}
