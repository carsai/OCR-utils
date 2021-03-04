# UTILS API

## *Instalación*

```bash
npm install
```

&nbsp;

## *Variables de entorno*

Se puede usar un fichero .env.

```properties
# Puerto
PORT=3000

# OCR API
OCR_HOST=host
OCR_PATH=path
OCR_KEY=key

# LOG
LOG_LEVEL=combined
```

&nbsp;

## *APIS*

&nbsp;

## Convertir imagen a texto

Esta api se le proporciona una imagen y devuelve un JSON con el texto que contenga dicha imagen.

**URL** : `/api/ocr`

**Método** : `POST`

**Seguridad** : NO

**Dato requerido** :

FORM-DATA:

|NOMBRE|VALOR|
|---|---|
|files|Fichero de tipo imagen|

&nbsp;

## Respuesta correcta

**Código** : `200 OK`

**Respuesta de ejemplo** :

```json
{
    "ok": true,
    "texto": "texto de la imagen"
}
```

&nbsp;

## Respuesta errónea

**Condición** : No se ha proporcionado fichero.

**Código** : `400 Petición mala`

**Contenido** :

```json
{
    "ok": false,
    "mensaje": "Fichero obligatorio"
}
```
