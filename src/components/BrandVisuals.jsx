import React, { useState } from 'react';

const BRAND_CONFIG = {
  "businessName": "OralMed",
  "initial": "O",
  "schematicType": "dental-3d-anatomy",
  "strokeWidth": 1.5,
  "accentHex": "#7C3AED",
  "goldHex": "#C084FC",
  "bgDarkHex": "#181127",
  "textLightHex": "#FFFFFF",
  "geometryStyle": "organic-minimal",
  "cornerRadius": "12px",
  "title": "iTero HD 3D Arch & Invisalign Alignment Blueprint",
  "subtitle": "Mapeo intraoral digital en tiempo real para predicción milimétrica de movimientos dentarios",
  "annotations": [
    "Vector de micro-movimiento: +0.25mm/etapa",
    "Modelado 3D de oclusión y margen gingival",
    "Ajuste biomecánico con SmartTrack® material",
    "Escaneo digital intraoral de alta definición"
  ],
  "materials": [
    "Alineadores removibles Invisalign®",
    "Escáner intraoral 3D iTero 5D",
    "Sistema de profilaxis AquaCare",
    "Carillas dentales"
  ],
  "locations": [
    "Naco, Santo Domingo",
    "Santo Domingo, República Dominicana"
  ]
};

/**
 * Ícono vectorial custom-made para cada servicio, construido con el mismo grosor de línea,
 * geometría y acento cromático del logo de la marca (CERO íconos genéricos de plantilla).
 */
export function BespokeServiceIcon({ index = 0, category = '', size = 44, className = '' }) {
  const sw = BRAND_CONFIG.strokeWidth;
  const stroke = BRAND_CONFIG.accentHex;
  const secondary = BRAND_CONFIG.goldHex;
  const variant = index % 6;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ flexShrink: 0 }}
    >
      {/* Marco sutil inspirado en la morfología del logo */}
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx={BRAND_CONFIG.cornerRadius === '999px' ? 22 : BRAND_CONFIG.cornerRadius === '12px' ? 8 : 2}
        stroke={stroke}
        strokeOpacity="0.28"
        strokeWidth={sw}
      />
      <line x1="2" y1="10" x2="8" y2="10" stroke={secondary} strokeWidth={sw} strokeOpacity="0.6" />
      <line x1="40" y1="38" x2="46" y2="38" stroke={secondary} strokeWidth={sw} strokeOpacity="0.6" />

      {variant === 0 && (
        <g stroke={stroke} strokeWidth={sw}>
          {/* Geometría inspirada en modulación arquitectónica / monograma */}
          <path d="M14 14H34M14 24H28M14 34H34" strokeLinecap="square" />
          <path d="M14 14V34" stroke={secondary} />
          <circle cx="32" cy="24" r="2.5" fill={secondary} stroke="none" />
        </g>
      )}
      {variant === 1 && (
        <g stroke={stroke} strokeWidth={sw}>
          {/* Perspectiva isométrica / precisión espacial */}
          <polygon points="24,11 36,18 36,31 24,38 12,31 12,18" strokeLinejoin="round" />
          <polyline points="12,18 24,25 36,18" stroke={secondary} />
          <line x1="24" y1="25" x2="24" y2="38" stroke={secondary} />
        </g>
      )}
      {variant === 2 && (
        <g stroke={stroke} strokeWidth={sw}>
          {/* Seccionamiento áureo / retícula de precisión */}
          <rect x="12" y="12" width="24" height="24" />
          <line x1="21" y1="12" x2="21" y2="36" stroke={secondary} />
          <line x1="21" y1="22" x2="36" y2="22" stroke={secondary} />
          <circle cx="16.5" cy="24" r="2" fill={secondary} stroke="none" />
        </g>
      )}
      {variant === 3 && (
        <g stroke={stroke} strokeWidth={sw}>
          {/* Compás / arco de simetría y proporción */}
          <path d="M12 34C12 21.8497 17.3726 14 24 14C30.6274 14 36 21.8497 36 34" />
          <line x1="10" y1="34" x2="38" y2="34" stroke={secondary} />
          <line x1="24" y1="10" x2="24" y2="34" strokeDasharray="2 2" stroke={secondary} />
          <circle cx="24" cy="14" r="2.5" fill={stroke} stroke="none" />
        </g>
      )}
      {variant === 4 && (
        <g stroke={stroke} strokeWidth={sw}>
          {/* Capas técnicas / elevación estructural */}
          <path d="M12 20L24 13L36 20L24 27L12 20Z" />
          <path d="M12 26L24 33L36 26" stroke={secondary} />
          <path d="M12 31L24 38L36 31" strokeOpacity="0.6" />
        </g>
      )}
      {variant === 5 && (
        <g stroke={stroke} strokeWidth={sw}>
          {/* Eje de calibración / detalle de autor */}
          <circle cx="24" cy="24" r="11" />
          <line x1="24" y1="9" x2="24" y2="16" stroke={secondary} />
          <line x1="24" y1="32" x2="24" y2="39" stroke={secondary} />
          <line x1="9" y1="24" x2="16" y2="24" stroke={secondary} />
          <line x1="32" y1="24" x2="39" y2="24" stroke={secondary} />
          <circle cx="24" cy="24" r="2.5" fill={secondary} stroke="none" />
        </g>
      )}
    </svg>
  );
}

/**
 * Ilustración técnica / Blueprint CAD / Esquema 3D vectorial interactivo hecho a medida para la marca.
 * Permite alternar capas de inspección y visualizar especificaciones reales del cliente.
 */
export function TechnicalSchematic({ className = '', darkOverride = null }) {
  const [activeLayer, setActiveLayer] = useState(0);
  const type = BRAND_CONFIG.schematicType;
  const sw = BRAND_CONFIG.strokeWidth;
  const accent = BRAND_CONFIG.accentHex;
  const gold = BRAND_CONFIG.goldHex;

  const layers =
    type === 'dental-3d-anatomy'
      ? [
          { id: 0, label: 'ARMONÍA & ARCO FACIAL', code: 'DSD-3D · 01' },
          { id: 1, label: 'ESTRUCTURA & IMPLANTE', code: 'BIO-CAD · 02' },
          { id: 2, label: 'TRANSLUCIDEZ & TEXTURA', code: 'CERAMIC · 03' }
        ]
      : type === 'millwork-cad'
      ? [
          { id: 0, label: 'MODULACIÓN & ALZADO', code: 'CAD-MM · 01' },
          { id: 1, label: 'HERRAJES & APERTURA', code: 'BLUM/SYS · 02' },
          { id: 2, label: 'ILUMINACIÓN INTEGRADA', code: 'LED-2700K · 03' }
        ]
      : [
          { id: 0, label: 'PLANTA & EJES ESTRUCTURALES', code: 'PLANO · A-01' },
          { id: 1, label: 'VOLUMETRÍA & ELEVACIÓN', code: 'CORTE · B-02' },
          { id: 2, label: 'MATERIALIDAD & DETALLE', code: 'ESPEC · C-03' }
        ];

  return (
    <div
      className={`relative overflow-hidden border ${className}`}
      style={{
        backgroundColor: darkOverride !== false ? '#0D0E11' : '#F4F3EF',
        borderColor: 'rgba(200, 164, 100, 0.25)',
        color: '#F5F3EE',
        padding: 'clamp(1.25rem, 3vw, 2.25rem)'
      }}
    >
      {/* Cabecera del plano técnico */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          paddingBottom: '1rem',
          marginBottom: '1.25rem',
          borderBottom: '1px solid rgba(245, 243, 238, 0.12)'
        }}
      >
        <div>
          <div
            style={{
              fontFamily: ' monospace',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: gold
            }}
          >
            {layers[activeLayer]?.code} — {BRAND_CONFIG.businessName}
          </div>
          <h4 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.45rem)', fontWeight: 500, margin: '0.2rem 0 0', color: '#F5F3EE' }}>
            {BRAND_CONFIG.title}
          </h4>
        </div>

        {/* Selector de capas interactivo */}
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {layers.map((layer, idx) => (
            <button
              key={layer.id}
              type="button"
              onClick={() => setActiveLayer(idx)}
              style={{
                background: activeLayer === idx ? accent : 'transparent',
                color: activeLayer === idx ? '#0D0E11' : 'rgba(245,243,238,0.75)',
                border: `1px solid ${activeLayer === idx ? accent : 'rgba(245,243,238,0.2)'}`,
                padding: '0.38rem 0.75rem',
                fontSize: '0.7rem',
                fontFamily: 'monospace',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {layer.label}
            </button>
          ))}
        </div>
      </div>

      {/* Lienzo Vectorial SVG */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', minHeight: '260px' }}>
        <svg
          viewBox="0 0 800 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <defs>
            <pattern id="cadGridSmall" width="25" height="25" patternUnits="userSpaceOnUse">
              <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(245,243,238,0.04)" strokeWidth="0.7" />
            </pattern>
            <pattern id="cadGridLarge" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#cadGridSmall)" />
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(245,243,238,0.09)" strokeWidth="0.9" />
            </pattern>
          </defs>

          {/* Retícula técnica de fondo */}
          <rect width="800" height="450" fill="url(#cadGridLarge)" />

          {/* Marco y cruces de calibración */}
          <rect x="20" y="20" width="760" height="410" stroke="rgba(245,243,238,0.18)" strokeWidth="1" />
          <path d="M15 20H25M20 15V25M775 20H785M780 15V25M15 430H25M20 425V435M775 430H785M780 425V435" stroke={gold} strokeWidth="1.2" />

          {type === 'dental-3d-anatomy' ? (
            <g>
              {/* Ejes de simetría facial y proporción áurea */}
              <line x1="400" y1="35" x2="400" y2="415" stroke={gold} strokeWidth="0.9" strokeDasharray="4 4" strokeOpacity="0.7" />
              <line x1="120" y1="225" x2="680" y2="225" stroke="rgba(245,243,238,0.25)" strokeWidth="0.8" />
              <path d="M 160 190 Q 400 295 640 190" stroke={gold} strokeWidth="1.5" fill="none" />
              <path d="M 180 155 Q 400 225 620 155" stroke="rgba(245,243,238,0.35)" strokeWidth="1" strokeDasharray="3 3" fill="none" />

              {/* Geometría dental / implante vectorial en vista técnica */}
              {/* Incisivos centrales y laterales en proporción 1.618 : 1 : 0.618 */}
              <g stroke="#F5F3EE" strokeWidth={sw}>
                {/* Central Izquierdo */}
                <path d="M342 135 C342 110, 396 110, 396 135 L393 232 C393 248, 346 248, 345 232 Z" fill="rgba(245,243,238,0.03)" />
                {/* Central Derecho */}
                <path d="M404 135 C404 110, 458 110, 458 135 L455 232 C454 248, 407 248, 407 232 Z" fill="rgba(245,243,238,0.03)" />
                {/* Lateral Izquierdo */}
                <path d="M298 145 C298 124, 336 124, 336 145 L334 222 C333 235, 301 235, 300 222 Z" strokeOpacity="0.75" />
                {/* Lateral Derecho */}
                <path d="M464 145 C464 124, 502 124, 502 145 L500 222 C499 235, 467 235, 466 222 Z" strokeOpacity="0.75" />
                {/* Caninos */}
                <path d="M258 155 C258 136, 292 136, 292 155 L289 216 C284 232, 263 230, 260 216 Z" strokeOpacity="0.5" />
                <path d="M508 155 C508 136, 542 136, 542 155 L540 216 C537 230, 516 232, 511 216 Z" strokeOpacity="0.5" />
              </g>

              {/* Capa de implante / raíz digital o malla 3D */}
              {activeLayer !== 2 && (
                <g stroke={accent} strokeWidth="1.2" strokeOpacity={activeLayer === 1 ? '1' : '0.55'}>
                  <line x1="370" y1="248" x2="370" y2="365" strokeDasharray="2 3" />
                  <line x1="430" y1="248" x2="430" y2="365" strokeDasharray="2 3" />
                  {/* Espiras de titanio de precisión */}
                  <path d="M356 275 L384 280 M358 290 L382 295 M360 305 L380 310 M362 320 L378 325 M364 335 L376 340" />
                  <path d="M416 275 L444 280 M418 290 L442 295 M420 305 L440 310 M422 320 L438 325 M424 335 L436 340" />
                </g>
              )}

              {/* Cotas de proporción áurea */}
              <g stroke={gold} strokeWidth="1" fill={gold} fontFamily="monospace" fontSize="10">
                <line x1="342" y1="92" x2="396" y2="92" />
                <line x1="342" y1="86" x2="342" y2="98" />
                <line x1="396" y1="86" x2="396" y2="98" />
                <text x="352" y="84" stroke="none">1.618 φ</text>

                <line x1="298" y1="92" x2="336" y2="92" />
                <text x="306" y="84" stroke="none">1.00</text>

                <circle cx="396" cy="210" r="4" fill="none" stroke={gold} strokeWidth="1.5" />
                <line x1="400" y1="210" x2="575" y2="115" stroke={gold} strokeDasharray="3 3" />
                <text x="580" y="118" stroke="none">TRANSLUCIDEZ INCISAL</text>
              </g>
            </g>
          ) : type === 'millwork-cad' ? (
            <g>
              {/* Alzado arquitectónico milimétrico de mobiliario / walk-in closet / cocina de autor */}
              <rect x="110" y="65" width="580" height="310" stroke="#F5F3EE" strokeWidth={sw * 1.2} fill="rgba(245,243,238,0.015)" />

              {/* Modulación vertical */}
              <line x1="245" y1="65" x2="245" y2="375" stroke="#F5F3EE" strokeWidth={sw} />
              <line x1="555" y1="65" x2="555" y2="375" stroke="#F5F3EE" strokeWidth={sw} />
              <line x1="400" y1="65" x2="400" y2="245" stroke="rgba(245,243,238,0.5)" strokeWidth="0.9" />

              {/* Repisas y gaveteros milimétricos */}
              <line x1="110" y1="135" x2="245" y2="135" stroke="#F5F3EE" strokeWidth="1" />
              <line x1="110" y1="205" x2="245" y2="205" stroke="#F5F3EE" strokeWidth="1" />
              <line x1="110" y1="275" x2="245" y2="275" stroke="#F5F3EE" strokeWidth="1" />
              <line x1="555" y1="135" x2="690" y2="135" stroke="#F5F3EE" strokeWidth="1" />
              <line x1="555" y1="205" x2="690" y2="205" stroke="#F5F3EE" strokeWidth="1" />
              <line x1="555" y1="275" x2="690" y2="275" stroke="#F5F3EE" strokeWidth="1" />

              {/* Isla central / módulo de gavetas con uñeros arquitectónicos */}
              <rect x="245" y="245" width="310" height="130" stroke={gold} strokeWidth={sw} fill="rgba(200,164,100,0.04)" />
              <line x1="245" y1="285" x2="555" y2="285" stroke={gold} strokeWidth="0.9" />
              <line x1="245" y1="330" x2="555" y2="330" stroke={gold} strokeWidth="0.9" />
              <line x1="400" y1="245" x2="400" y2="375" stroke={gold} strokeWidth="0.9" />

              {/* Líneas de proyección de apertura (CAD) */}
              {activeLayer !== 2 && (
                <g stroke={accent} strokeWidth="0.85" strokeDasharray="4 4" strokeOpacity="0.8">
                  <polyline points="110,65 245,135 110,205" />
                  <polyline points="690,65 555,135 690,205" />
                  <polyline points="245,65 400,155 245,245" />
                  <polyline points="555,65 400,155 555,245" />
                </g>
              )}

              {/* Tiras de iluminación LED cálida 2700K */}
              {activeLayer !== 1 && (
                <g stroke={gold} strokeWidth="2.2">
                  <line x1="120" y1="72" x2="235" y2="72" />
                  <line x1="565" y1="72" x2="680" y2="72" />
                  <line x1="258" y1="72" x2="542" y2="72" />
                </g>
              )}

              {/* Cotas dimensionales */}
              <g stroke={gold} fill={gold} fontFamily="monospace" fontSize="10">
                <line x1="110" y1="45" x2="690" y2="45" strokeWidth="0.9" />
                <line x1="110" y1="39" x2="110" y2="51" strokeWidth="1" />
                <line x1="245" y1="39" x2="245" y2="51" strokeWidth="1" />
                <line x1="555" y1="39" x2="555" y2="51" strokeWidth="1" />
                <line x1="690" y1="39" x2="690" y2="51" strokeWidth="1" />
                <text x="155" y="38" stroke="none">600 mm</text>
                <text x="375" y="38" stroke="none">1800 mm</text>
                <text x="600" y="38" stroke="none">600 mm</text>

                <line x1="720" y1="65" x2="720" y2="375" strokeWidth="0.9" />
                <line x1="714" y1="65" x2="726" y2="65" strokeWidth="1" />
                <line x1="714" y1="375" x2="726" y2="375" strokeWidth="1" />
                <text x="732" y="225" stroke="none">2400 mm</text>
              </g>
            </g>
          ) : (
            <g>
              {/* Plano arquitectónico / estructural CAD con ejes, planta y elevación */}
              <g stroke="rgba(245,243,238,0.22)" strokeWidth="0.8" strokeDasharray="6 4">
                <line x1="160" y1="35" x2="160" y2="415" />
                <line x1="340" y1="35" x2="340" y2="415" />
                <line x1="520" y1="35" x2="520" y2="415" />
                <line x1="660" y1="35" x2="660" y2="415" />
                <line x1="60" y1="120" x2="740" y2="120" />
                <line x1="60" y1="310" x2="740" y2="310" />
              </g>

              {/* Volumetría principal en planta y alzado */}
              <rect x="160" y="120" width="360" height="190" stroke="#F5F3EE" strokeWidth={sw * 1.4} fill="rgba(245,243,238,0.02)" />
              <rect x="340" y="85" width="320" height="260" stroke={gold} strokeWidth={sw} fill="rgba(200,164,100,0.03)" />

              {/* Divisiones espaciales internas y escaleras */}
              <line x1="250" y1="120" x2="250" y2="310" stroke="#F5F3EE" strokeWidth="1" />
              <line x1="160" y1="215" x2="520" y2="215" stroke="#F5F3EE" strokeWidth="1" />

              {/* Arco de giro de puerta CAD */}
              <path d="M 250 180 A 35 35 0 0 1 285 215" stroke={accent} strokeWidth="1" strokeDasharray="3 2" fill="none" />
              <line x1="250" y1="215" x2="250" y2="180" stroke={accent} strokeWidth="1.2" />

              {/* Trama de circulación / escalera técnica */}
              <g stroke="rgba(245,243,238,0.55)" strokeWidth="0.9">
                <rect x="535" y="135" width="95" height="45" />
                <line x1="550" y1="135" x2="550" y2="180" />
                <line x1="565" y1="135" x2="565" y2="180" />
                <line x1="580" y1="135" x2="580" y2="180" />
                <line x1="595" y1="135" x2="595" y2="180" />
                <line x1="610" y1="135" x2="610" y2="180" />
              </g>

              {/* Rosa náutica / Norte arquitectónico */}
              <g transform="translate(95, 75)" stroke={gold} strokeWidth="1">
                <circle cx="0" cy="0" r="18" strokeOpacity="0.5" />
                <polygon points="0,-16 5,6 0,2 -5,6" fill={gold} stroke="none" />
                <text x="-4" y="-22" fill={gold} stroke="none" fontFamily="monospace" fontSize="9">N</text>
              </g>

              {/* Burbujas de eje estructural */}
              <g fill={gold} stroke={gold} fontFamily="monospace" fontSize="9">
                <circle cx="160" cy="48" r="10" fill="none" />
                <text x="154" y="51" stroke="none">A1</text>
                <circle cx="340" cy="48" r="10" fill="none" />
                <text x="334" y="51" stroke="none">B2</text>
                <circle cx="520" cy="48" r="10" fill="none" />
                <text x="514" y="51" stroke="none">C3</text>
                <circle cx="660" cy="48" r="10" fill="none" />
                <text x="654" y="51" stroke="none">D4</text>
              </g>
            </g>
          )}
        </svg>
      </div>

      {/* Pie del plano con cotas y materiales reales verificados */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '0.75rem',
          marginTop: '1.25rem',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(245, 243, 238, 0.12)',
          fontFamily: 'monospace',
          fontSize: '0.72rem'
        }}
      >
        {BRAND_CONFIG.annotations.map((ann, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(245,243,238,0.82)' }}>
            <span style={{ color: gold }}>[0{i + 1}]</span>
            <span>{ann}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnicalSchematic;
