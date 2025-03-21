import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCallout extends Struct.ComponentSchema {
  collectionName: 'components_shared_callouts';
  info: {
    description: '';
    displayName: 'Callout';
  };
  attributes: {
    content: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<['(keins)', 'telefon']> &
      Schema.Attribute.DefaultTo<'(keins)'>;
    type: Schema.Attribute.Enumeration<['dark', 'light']> &
      Schema.Attribute.DefaultTo<'dark'>;
  };
}

export interface SharedContentblockHtml extends Struct.ComponentSchema {
  collectionName: 'components_shared_contentblock_htmls';
  info: {
    description: '';
    displayName: 'Contentblock - HTML';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.String;
    template: Schema.Attribute.Enumeration<['default', 'inverse-row']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    description: '';
    displayName: 'CTA (Einmalig)';
  };
  attributes: {
    bild: Schema.Attribute.Media<'images' | 'files'>;
    buttonText: Schema.Attribute.String;
    buttonUrl: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    titel: Schema.Attribute.String & Schema.Attribute.Required;
    Typ: Schema.Attribute.Enumeration<
      ['standard', 'invers', 'volle-breite', 'volle-breite--invers', 'bild']
    >;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    description: '';
    displayName: 'Header';
  };
  attributes: {
    abweichenderTitel: Schema.Attribute.String;
    ctaButtonText: Schema.Attribute.String;
    ctaButtonUrl: Schema.Attribute.String;
    headerInhalt: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    headerTyp: Schema.Attribute.Enumeration<['regular', 'small', 'fullPage']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'regular'>;
    hintergrundbild: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedHeading extends Struct.ComponentSchema {
  collectionName: 'components_shared_headings';
  info: {
    description: '';
    displayName: 'Heading';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'center'>;
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    preHeading: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTile extends Struct.ComponentSchema {
  collectionName: 'components_shared_tiles';
  info: {
    displayName: 'Tile';
  };
  attributes: {
    content: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface SharedTileGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_tile_groups';
  info: {
    displayName: 'TileGroup';
  };
  attributes: {
    tiles: Schema.Attribute.Component<'shared.tile', true>;
  };
}

export interface SharedToggle extends Struct.ComponentSchema {
  collectionName: 'components_shared_toggles';
  info: {
    displayName: 'Toggle';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading: Schema.Attribute.String;
  };
}

export interface SharedToggleGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_toggle_groups';
  info: {
    description: '';
    displayName: 'ToggleGroup';
  };
  attributes: {
    Inhalt: Schema.Attribute.Component<'shared.toggle', true>;
  };
}

export interface SharedTwoColText extends Struct.ComponentSchema {
  collectionName: 'components_shared_two_col_texts';
  info: {
    description: '';
    displayName: 'TwoColText';
  };
  attributes: {
    inverse: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    links: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    rechts: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.callout': SharedCallout;
      'shared.contentblock-html': SharedContentblockHtml;
      'shared.cta': SharedCta;
      'shared.header': SharedHeader;
      'shared.heading': SharedHeading;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.tile': SharedTile;
      'shared.tile-group': SharedTileGroup;
      'shared.toggle': SharedToggle;
      'shared.toggle-group': SharedToggleGroup;
      'shared.two-col-text': SharedTwoColText;
    }
  }
}
