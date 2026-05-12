import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  email?: string
  phone?: string
  message?: string
}

const InquiryNotification = ({ name, email, phone, message }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New inquiry from {name || 'website visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Website Inquiry</Heading>
        <Text style={text}>You have received a new inquiry through the Heritage Jaipur Travels website.</Text>
        <Section style={card}>
          <Row label="Name" value={name} />
          <Row label="Email" value={email} />
          <Row label="Phone / WhatsApp" value={phone} />
        </Section>
        <Hr style={hr} />
        <Text style={label}>Message</Text>
        <Section style={messageBox}>
          <Text style={messageText}>{message || '(no message)'}</Text>
        </Section>
        <Text style={footer}>Reply directly to {email || 'the customer'} to respond.</Text>
      </Container>
    </Body>
  </Html>
)

const Row = ({ label, value }: { label: string; value?: string }) => (
  <Text style={rowText}>
    <span style={rowLabel}>{label}: </span>
    <span style={rowValue}>{value || '—'}</span>
  </Text>
)

export const template = {
  component: InquiryNotification,
  subject: (data: Record<string, any>) => `New inquiry from ${data?.name || 'website visitor'}`,
  to: 'info@heritagejaipurtravels.com',
  displayName: 'Inquiry notification (to admin)',
  previewData: { name: 'John Smith', email: 'john@example.com', phone: '+1 234 567 8900', message: 'I would like to plan a 7-day Rajasthan tour in March.' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, serif' }
const container = { padding: '32px 28px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: '#8B1A1A', margin: '0 0 16px' }
const text = { fontSize: '14px', color: '#333', lineHeight: '1.6', margin: '0 0 16px' }
const card = { backgroundColor: '#FFF8F0', padding: '16px 20px', borderRadius: '6px', border: '1px solid #E5D9C2' }
const rowText = { fontSize: '14px', margin: '6px 0', lineHeight: '1.5' }
const rowLabel = { color: '#8B1A1A', fontWeight: 'bold' as const }
const rowValue = { color: '#222' }
const hr = { borderColor: '#E5D9C2', margin: '20px 0' }
const label = { fontSize: '11px', textTransform: 'uppercase' as const, letterSpacing: '1px', color: '#8B1A1A', margin: '0 0 6px', fontWeight: 'bold' as const }
const messageBox = { backgroundColor: '#FFF8F0', padding: '14px 18px', borderRadius: '6px', borderLeft: '4px solid #C9A84C' }
const messageText = { fontSize: '14px', color: '#333', whiteSpace: 'pre-wrap' as const, margin: 0, lineHeight: '1.6' }
const footer = { fontSize: '12px', color: '#666', margin: '20px 0 0' }
