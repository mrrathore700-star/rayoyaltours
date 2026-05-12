import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Heritage Jaipur Travels'

interface Props {
  name?: string
  message?: string
}

const InquiryConfirmation = ({ name, message }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thank you for contacting {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>{name ? `Dhanyawaad, ${name}!` : 'Dhanyawaad!'}</Heading>
        <Text style={text}>
          Thank you for reaching out to <strong>{SITE_NAME}</strong>. We have received your inquiry and our travel
          consultants will get back to you within 24 hours to help craft your perfect Rajasthan journey.
        </Text>
        {message ? (
          <Section style={quoteBox}>
            <Text style={quoteLabel}>Your message</Text>
            <Text style={quoteText}>{message}</Text>
          </Section>
        ) : null}
        <Hr style={hr} />
        <Text style={text}>
          Need an immediate response? Chat with us on WhatsApp or call us directly:
        </Text>
        <Text style={contact}>📞 +91 94610 69858<br />✉️ info@heritagejaipurtravels.com</Text>
        <Text style={footer}>Warm regards,<br />The {SITE_NAME} Team</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: InquiryConfirmation,
  subject: 'We received your inquiry — Heritage Jaipur Travels',
  displayName: 'Inquiry confirmation (to customer)',
  previewData: { name: 'John', message: 'I would like to plan a 7-day Rajasthan tour in March.' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, serif' }
const container = { padding: '32px 28px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '24px', fontWeight: 'bold', color: '#8B1A1A', margin: '0 0 20px' }
const text = { fontSize: '15px', color: '#333333', lineHeight: '1.6', margin: '0 0 16px' }
const quoteBox = { backgroundColor: '#FFF8F0', borderLeft: '4px solid #C9A84C', padding: '14px 18px', margin: '20px 0', borderRadius: '4px' }
const quoteLabel = { fontSize: '11px', textTransform: 'uppercase' as const, letterSpacing: '1px', color: '#8B1A1A', margin: '0 0 6px' }
const quoteText = { fontSize: '14px', color: '#444', fontStyle: 'italic' as const, margin: 0 }
const hr = { borderColor: '#E5D9C2', margin: '24px 0' }
const contact = { fontSize: '14px', color: '#8B1A1A', fontWeight: 'bold' as const, margin: '0 0 24px', lineHeight: '1.8' }
const footer = { fontSize: '13px', color: '#666', margin: '24px 0 0' }
