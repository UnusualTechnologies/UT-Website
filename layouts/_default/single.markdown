{{ with .Title }}# {{ . }}{{ end }}
{{ with or .Description .Params.overview }}
{{ . }}
{{ end }}
{{- with .Params.client }}
Client: {{ .name }}{{ with .website }} ({{ . }}){{ end }}
{{ end }}
{{- with .Params.key_facts }}
{{ range . }}- {{ .label }}: {{ .value }}
{{ end }}{{ end }}
{{- with .Params.technologies }}
Technologies: {{ delimit . ", " }}
{{ end }}
{{- with .Params.overview_video_id }}
Video: https://www.youtube.com/watch?v={{ . }}
{{ end }}
{{- with .Params.video_description }}
## Video description

{{ . }}
{{ end }}
{{- with .Params.testimonial }}{{ with .quote }}
## Client quote

> {{ . }}
{{ with $.Params.testimonial.person_name }}
— {{ . }}{{ with $.Params.testimonial.person_title }}, {{ . }}{{ end }}{{ with $.Params.testimonial.person_org }}, {{ . }}{{ end }}
{{ end }}{{ end }}{{ end }}
{{ replace .RawContent "<!-- writeup -->" "" }}
