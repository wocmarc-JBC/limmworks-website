# LIMM Contact Details Needed

The site keeps WhatsApp details in one shared config file:

- `src/data/site.ts`

## Required

Marcus must provide the confirmed LIMM Works WhatsApp number before launch.

Needed formats:

- Display format, for example: `+65 XXXX XXXX`
- E.164 format for `wa.me`, for example: `658XXXXXXX`

## Current Site Behaviour

Because no confirmed LIMM WhatsApp number is present:

- Visible contact text shows `WhatsApp: to be confirmed`.
- WhatsApp buttons remain visually active and route to `/contact#project-review`.
- No bracket placeholder text is shown.
- No fake number is used.

Do not use any non-LIMM number unless Marcus explicitly confirms it for LIMM Works.
