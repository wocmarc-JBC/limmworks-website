# LIMM Contact Details

The site keeps WhatsApp details in one shared config file:

- `src/data/site.ts`

## Confirmed WhatsApp Details

- Display format: `+65 8989 8278`
- `wa.me` format: `6589898278`

## Current Site Behaviour

- Header, sticky, footer, service, contact and Owner's Notes CTAs route to LIMM Works WhatsApp.
- WhatsApp links include a prepared enquiry message using `https://wa.me/6589898278?text=...`.
- Contact form output generates an enquiry message for the confirmed LIMM Works number.
- Do not use any non-LIMM number unless Marcus explicitly confirms a future replacement for LIMM Works.
