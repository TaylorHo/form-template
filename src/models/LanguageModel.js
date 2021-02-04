/*
  Copyright (c) 2020 - present, DITDOT Ltd. - MIT Licence
  https://github.com/ditdot-dev/vue-flow-form
  https://www.ditdot.hr/en
*/

// Language data store

export default class LanguageModel {
  constructor(options) {
    this.enterKey = 'Enter'
    this.shiftKey = 'Shift'
    this.ok = 'OK'
    this.continue = 'Continuar'
    this.skip = 'Pular'
    this.pressEnter = ''
    this.multipleChoiceHelpText = 'Escolha quantas quiser'
    this.multipleChoiceHelpTextSingle = 'Escolha apenas uma resposta'
    this.otherPrompt = 'Outro'
    this.placeholder = 'Escreva sua resposta aqui...'
    this.submitText = 'Enviar'
    this.longTextHelpText = ''
    this.prev = 'Anterior'
    this.next = 'Próxima'
    this.percentCompleted = ':percent% completo'
    this.invalidPrompt = 'Por favor preencha o campo corretamente'
    this.thankYouText = 'Obrigado!'
    this.successText = 'Sua solicitação foi enviada.'
    this.ariaOk = 'Pressione para continuar'
    this.ariaRequired = 'Este passo é obrigatório'
    this.ariaPrev = 'Passo Anterior'
    this.ariaNext = 'Próximo Passo'
    this.ariaSubmitText = 'Pressione para enviar'
    this.ariaMultipleChoice = 'Aperte :letter para selecionar'
    this.ariaTypeAnswer = 'Escreva sua resposta aqui'

    Object.assign(this, options || {})
  }

  /**
   * Inserts a new CSS class into the language model string to format the :string
   * Use it in a component's v-html directive: v-html="language.formatString(language.languageString)"
   */
  formatString(string) {
    return string.replace(/:(\w+)/g, (match, word) => {
      if (this[word]) {
        return '<span class="f-string-em">' + this[word] + '</span>'
      }
      
      return match
    })
  }
}


