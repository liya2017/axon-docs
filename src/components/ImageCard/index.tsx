import React from 'react';
import clsx from 'clsx';
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
        <div className="card__body text">
            <Link to={url}>
                {typeof (title) === 'string' ?
                    <em>{title}</em> :
                    title
                }
            </Link>
            {typeof (description) === 'string' ?
                <p style={{color: '#666666', fontSize: '13px'}}>{description}</p> :
                description
            }
        </div>
    const Image = () =>
        <div className="card__body image" style={{display: 'flex', alignItems: 'flex-end'}}>
            <Link to={url}>
                <ThemedImage
                    alt={alt || title as string}
                    sources={{light, dark}}
                />
            </Link>
        </div>

    return (
        <div className={clsx('card')} style={{flexDirection, height: '100%'}}>
            <Text/>
            <Image/>
        </div>
    );
}
