import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import {Property} from "csstype";

interface Props {
    title: string;
    light: string;
    dark: string;
    url: string;
    description: string;
    imagePosition: 'top' | 'bottom' | 'left' | 'right'
}

export default function ImageCard({title, light, dark, url, description, imagePosition = 'bottom'}: Props) {
    const flexDirection = {
        'top': 'column-reverse',
        'bottom': 'column',
        'left': 'row-reverse',
        'right': 'row'
    }[imagePosition]! as Property.FlexDirection;

    const Text = () =>
        <div className="card__body" style={{paddingBottom: '16px', minHeight: '103.81px'}}>
            <Link to={url}>
                <h3>{title}</h3>
            </Link>
            <p>
                <Translate>
                    {description}
                </Translate>
            </p>
        </div>
    const Image = () =>
        <div className="card__body" style={{paddingTop: 0, minWidth: '91px', display: 'flex', alignItems: 'flex-end'}}>
            <Link to={url}>
                <ThemedImage
                    alt={title}
                    sources={{light, dark}}
                />
            </Link>
        </div>

    return (
        <div className={clsx('card')} style={{flexDirection}}>
            <Text/>
            <Image/>
        </div>
    );
}
