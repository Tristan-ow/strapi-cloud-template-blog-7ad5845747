import type { Schema, Struct } from '@strapi/strapi';

export interface LandingpageBenefitItems extends Struct.ComponentSchema {
  collectionName: 'components_landingpage_benefit_items';
  info: {
    description: '';
    displayName: 'LP_BenefitItems';
  };
  attributes: {
    Content: Schema.Attribute.Text;
    Headline: Schema.Attribute.String;
    Icon: Schema.Attribute.String;
    Subcontent: Schema.Attribute.Text;
  };
}

export interface LandingpageLpRowBenefits extends Struct.ComponentSchema {
  collectionName: 'components_landingpage_lp_row_benefits';
  info: {
    displayName: 'LP_Row_Benefits';
  };
  attributes: {
    Headline: Schema.Attribute.String;
    Items: Schema.Attribute.Component<'landingpage.benefit-items', true>;
    ProcessHeadline: Schema.Attribute.String;
    Steps: Schema.Attribute.Component<'landingpage.benefit-items', true>;
    Subheadline: Schema.Attribute.String;
  };
}

export interface LandingpageLpRowCta extends Struct.ComponentSchema {
  collectionName: 'components_landingpage_lp_row_ctas';
  info: {
    displayName: 'LP_Row_CTA';
  };
  attributes: {
    ButtonText: Schema.Attribute.String;
    Headline: Schema.Attribute.String;
    Media: Schema.Attribute.Media<'images' | 'videos'>;
    Subheadline: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface LandingpageLpRowLawyers extends Struct.ComponentSchema {
  collectionName: 'components_landingpage_lp_row_lawyers';
  info: {
    displayName: 'LP_Row_Lawyers';
  };
  attributes: {
    Anwaelte: Schema.Attribute.JSON;
    Headline: Schema.Attribute.String;
    Subheadline: Schema.Attribute.Text;
  };
}

export interface LandingpageLpRowProblemsection extends Struct.ComponentSchema {
  collectionName: 'components_landingpage_lp_row_problemsections';
  info: {
    description: '';
    displayName: 'LP_Row_Problem_Solution_Section';
  };
  attributes: {
    Badge_Content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Badge_Footer: Schema.Attribute.String;
    Badge_Headline: Schema.Attribute.String;
    Buttontext: Schema.Attribute.String;
    Headline: Schema.Attribute.String;
    Items: Schema.Attribute.Component<'landingpage.benefit-items', true>;
    Subheadline: Schema.Attribute.Text;
  };
}

export interface LandingpageLpRowTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_landingpage_lp_row_testimonials';
  info: {
    description: '';
    displayName: 'LP_Row_Testimonials';
  };
  attributes: {
    Headline: Schema.Attribute.String;
    LP_Testimonial_Entry: Schema.Attribute.Component<
      'landingpage.lp-testimonial',
      true
    >;
    Statistics: Schema.Attribute.JSON;
  };
}

export interface LandingpageLpRowText extends Struct.ComponentSchema {
  collectionName: 'components_landingpage_lp_row_texts';
  info: {
    displayName: 'LP_Row_Text';
  };
  attributes: {
    Buttontext: Schema.Attribute.String;
    Buttonurl: Schema.Attribute.String;
    Content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Headline: Schema.Attribute.String;
    Subheadline: Schema.Attribute.String;
  };
}

export interface LandingpageLpRowTextImage extends Struct.ComponentSchema {
  collectionName: 'components_landingpage_lp_row_text_images';
  info: {
    description: '';
    displayName: 'LP_Row_TextImage';
  };
  attributes: {
    Badge: Schema.Attribute.Component<
      'landingpage.lp-row-text-image-badge',
      false
    >;
    Benefit_Item: Schema.Attribute.Component<'landingpage.benefit-items', true>;
    Buttontext: Schema.Attribute.String;
    Headline: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Subheadline: Schema.Attribute.String;
  };
}

export interface LandingpageLpRowTextImageBadge extends Struct.ComponentSchema {
  collectionName: 'components_landingpage_lp_row_text_image_badges';
  info: {
    displayName: 'LP_Row_TextImage_Badge';
  };
  attributes: {
    Headline: Schema.Attribute.String;
    Icon: Schema.Attribute.String;
    Subheadline: Schema.Attribute.String;
  };
}

export interface LandingpageLpTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_landingpage_lp_testimonials';
  info: {
    description: '';
    displayName: 'LP_Testimonial';
  };
  attributes: {
    Content: Schema.Attribute.String;
    Name: Schema.Attribute.String;
    Subtitle: Schema.Attribute.String;
  };
}

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

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    FAQ_Entry: Schema.Attribute.Component<'shared.faq-entries', true>;
    Headline: Schema.Attribute.String;
    Subheadline: Schema.Attribute.String;
  };
}

export interface SharedFaqEntries extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_entries';
  info: {
    displayName: 'FAQ_Entries';
  };
  attributes: {
    Content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    Headline: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface SharedLpHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_lp_heroes';
  info: {
    description: '';
    displayName: 'LP_Hero';
  };
  attributes: {
    Badge1: Schema.Attribute.String;
    Badge2: Schema.Attribute.String;
    Benefits: Schema.Attribute.JSON;
    Box_Benefits: Schema.Attribute.JSON;
    Box_Buttontext: Schema.Attribute.String;
    Box_Headline: Schema.Attribute.String;
    Box_Subheader: Schema.Attribute.String;
    Headline: Schema.Attribute.String;
    Subheader: Schema.Attribute.Text;
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
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
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
    description: '';
    displayName: 'Tile';
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
      'landingpage.benefit-items': LandingpageBenefitItems;
      'landingpage.lp-row-benefits': LandingpageLpRowBenefits;
      'landingpage.lp-row-cta': LandingpageLpRowCta;
      'landingpage.lp-row-lawyers': LandingpageLpRowLawyers;
      'landingpage.lp-row-problemsection': LandingpageLpRowProblemsection;
      'landingpage.lp-row-testimonials': LandingpageLpRowTestimonials;
      'landingpage.lp-row-text': LandingpageLpRowText;
      'landingpage.lp-row-text-image': LandingpageLpRowTextImage;
      'landingpage.lp-row-text-image-badge': LandingpageLpRowTextImageBadge;
      'landingpage.lp-testimonial': LandingpageLpTestimonial;
      'shared.callout': SharedCallout;
      'shared.contentblock-html': SharedContentblockHtml;
      'shared.cta': SharedCta;
      'shared.faq': SharedFaq;
      'shared.faq-entries': SharedFaqEntries;
      'shared.header': SharedHeader;
      'shared.heading': SharedHeading;
      'shared.lp-hero': SharedLpHero;
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
