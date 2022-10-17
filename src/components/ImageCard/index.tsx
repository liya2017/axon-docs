import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import {Property} from "csstype";

interface Props {
    title: string | JSX.Element;
    light: string;
    dark: string;
    url: string;
    description: string | JSX.Element;
    imagePosition: 'top' | 'bottom' | 'left' | 'right';
    alt?: string;
}

export default function ImageCard({title, light, dark, url, description, imagePosition = 'bottom', alt}: Props) {
    const flexDirection = {
        'top': 'column-reverse',
        'bottom': 'column',
        'left': 'row-reverse',
        'right': 'row'
    }[imagePosition]! as Property.FlexDirection;

    const Text = () =>
        <div className="card__body" style={{paddingBottom: '16px', minHeight: '132px'}}>
            <Link to={url}>
                {typeof (title) === 'string' ?
                    <strong>{title}</strong> :
                    title
                }
            </Link>
            <p>
                {typeof (description) === 'string' ?
                    <Translate>{description}</Translate> :
                    description
                }
            </p>
        </div>
    const Image = () =>
        <div className="card__body" style={{paddingTop: 0, minWidth: '91px', display: 'flex', alignItems: 'flex-end'}}>
            <Link to={url}>
                <ThemedImage
                    alt={alt || title as string}
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
