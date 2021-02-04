// Create and setup your form here
 
<template>
  <div>
    <header class="vff-header">
      <div class="f-container">
       <!-- Add custom logo here -->
        <img src="../src/assets/img/logo-ver.png" alt="Logo Pronade" width="100px">
      </div>
    </header>

    <flow-form
      ref="flowform"
      v-on:complete="onComplete"
      v-on:submit="onSubmit"
      v-bind:questions="questions"
      v-bind:language="language"
      v-bind:standalone="true"
    >
    <!-- Custom content for the Complete/Submit screen slots in the FlowForm component -->
      <!-- We've overriden the default "complete" slot content -->
     <template v-slot:complete>
        <div class="f-section-wrap">
          <p>
            <span class="fh2">Obrigado. 🙏</span>
            <span class="f-section-text">
              Bom trabalho, sua solicitação foi feita. Em breve entraremos em contato com você para discutir sobre o desconto.
            </span>
          </p>
        </div>  
      </template>

      <!-- We've overriden the default "completeButton" slot content -->
      <template v-slot:completeButton>
        <div class="f-submit" v-if="!submitted">
          <button 
            class="o-btn-action"
            ref="button"
            type="submit"
            href="#"
            v-on:click.prevent="onSendData()"
            aria-label="Press to submit"
          >
            <span>{{ language.submitText }}</span>
          </button>
          <a class="f-enter-desc"
            href="#"
            v-on:click.prevent="onSendData()"
            v-html="language.formatString(language.pressEnter)">
          </a>
        </div>

        <p class="text-success" v-if="submitted">Enviado com Sucesso.</p>
      </template>
    </flow-form>
  </div>
</template>

<script>
  /*
    Copyright (c) 2020 - present, DITDOT Ltd. - MIT Licence
    https://www.ditdot.hr/en
  */

  // Import necessary components and classes
  import FlowForm from '../src/components/FlowForm.vue'
  import QuestionModel, { QuestionType, ChoiceOption, LinkOption } from '../src/models/QuestionModel'
  import LanguageModel from '../src/models/LanguageModel'
  // If using the npm package, use the following line instead of the ones above.
  // import FlowForm, { QuestionModel, QuestionType, ChoiceOption, LanguageModel } from '@ditdot-dev/vue-flow-form'

  export default {
    name: 'example',
    components: {
      FlowForm
    },
    data() {
      return {
        submitted: false,
        completed: false,
        language: new LanguageModel(),
        // Create question list with QuestionModel instances
        questions: [
          new QuestionModel({
            id: 'init_msg',
            title: 'Solicitar Desconto. 😄',
            content: 'Curso de Auxiliar de Serviços Administrativos',
            description: 'A seguir vamos solicitar algumas informações para tornar o desconto possível, mas não se preocupe que é rapidinho.',
            type: QuestionType.SectionBreak
          }),
          new QuestionModel({
            id: 'nome',
            tagline: 'Então, vamos às perguntas ✨',
            title: 'Qual é o seu nome?',
            type: QuestionType.Text,
            required: true,
            placeholder: 'Escreva aqui...'
          }),
          new QuestionModel({
            id: 'idade',
            tagline: 'É um belo nome! 👏',
            title: 'Agora, qual sua idade?',
            type: QuestionType.Number,
            required: true,
            placeholder: 'Escreva aqui...'
          }),
          new QuestionModel({
            id: 'uf',
            tagline: 'Em qual estado você mora? 🤔',
            title: 'Escolha um abaixo:',
            type: QuestionType.Dropdown,
            multiple: false,
            placeholder: 'Selecione',
            inline: false,
            required: true,
            options: [
              new ChoiceOption({
                label: 'Rio Grande do Sul',
                value: 'RS'
              }),
              new ChoiceOption({
                label: 'Santa Catarina',
                value: 'SC'
               }),
              new ChoiceOption({
                label: 'Paraná',
                value: 'PR'
              }),
              new ChoiceOption({
                label: 'São Paulo',
                value: 'SP'
              })
            ],
            jump: {
              RS: 'rs',
              SC: 'sc',
              PR: 'pr',
              SP: 'sp'
            }
          }),
          new QuestionModel({
            id: 'rs',
            tagline: 'Agora escolha uma das cidades 🎯',
            title: 'Onde gostaria de fazer o curso?',
            type: QuestionType.Dropdown,
            multiple: false,
            placeholder: 'Selecione',
            inline: false,
            required: true,
            options: [
              new ChoiceOption({
                label: 'Cidade Teste',
                value: 'cidade_teste'
              }),
              new ChoiceOption({
                label: 'Outra Cidade',
                value: 'outra_cidade'
              })
            ],
            jump: {
              cidade_teste: 'cidade',
              outra_cidade: 'cidade'
            }
          }),
          new QuestionModel({
            id: 'sc',
            tagline: 'Agora escolha uma das cidades 🎯',
            title: 'Onde gostaria de fazer o curso?',
            type: QuestionType.Dropdown,
            multiple: false,
            placeholder: 'Selecione',
            inline: false,
            required: true,
            options: [
              new ChoiceOption({
                label: 'Cidade Teste',
                value: 'cidade_teste'
              }),
              new ChoiceOption({
                label: 'Outra Cidade',
                value: 'outra_cidade'
              })
            ],
            jump: {
              cidade_teste: 'cidade',
              outra_cidade: 'cidade'
            }
          }),
          new QuestionModel({
            id: 'pr',
            tagline: 'Agora escolha uma das cidades 🎯',
            title: 'Onde gostaria de fazer o curso?',
            type: QuestionType.Dropdown,
            multiple: false,
            placeholder: 'Selecione',
            inline: false,
            required: true,
            options: [
              new ChoiceOption({
                label: 'Cidade Teste',
                value: 'cidade_teste'
              }),
              new ChoiceOption({
                label: 'Outra Cidade',
                value: 'outra_cidade'
              })
            ],
            jump: {
              cidade_teste: 'cidade',
              outra_cidade: 'cidade'
            }
          }),
          new QuestionModel({
            id: 'sp',
            tagline: 'Agora escolha uma das cidades 🎯',
            title: 'Onde gostaria de fazer o curso?',
            type: QuestionType.Dropdown,
            multiple: false,
            placeholder: 'Selecione',
            inline: false,
            required: true,
            options: [
              new ChoiceOption({
                label: 'Cidade Teste',
                value: 'cidade_teste'
              }),
              new ChoiceOption({
                label: 'Outra Cidade',
                value: 'outra_cidade'
              })
            ],
            jump: {
              cidade_teste: 'cidade',
              outra_cidade: 'cidade'
            }
          }),
          new QuestionModel({
            id: 'cidade',
            tagline: 'Ótimo! Estamos quase terminando',
            title: 'Em que cidade você mora?',
            type: QuestionType.Text,
            required: true,
            placeholder: 'Escreva aqui...'
          }),
          new QuestionModel({
            id: 'telefone',
            tagline: 'Anotado! 👍',
            title: 'Agora, precisamos de um número para contato.',
            type: QuestionType.Phone,
            required: true,
            mask: '(##) #####-####'
          }),
          new QuestionModel({
            id: 'ocupacao',
            tagline: 'Última pregunta! 🚀',
            title: 'Qual sua ocupação atual?',
            type: QuestionType.Dropdown,
            multiple: false,
            placeholder: 'Selecione',
            inline: false,
            required: true,
            options: [
              new ChoiceOption({
                label: 'Estudando Apenas'
              }),
              new ChoiceOption({
                label: 'Trabalhando Apenas'
              }),
              new ChoiceOption({
                label: 'Trabalhando e Estudando'
              }),
              new ChoiceOption({
                label: 'Desempregado'
              }),
              new ChoiceOption({
                label: 'Aposentado ou Pensionista'
              }),
              new ChoiceOption({
                label: 'Autônomo'
              })
            ]
          }),
        ]
      }
    },
    mounted() {
      document.addEventListener('keyup', this.onKeyListener)
    },
    beforeDestroy() {
      document.removeEventListener('keyup', this.onKeyListener)
    },
    methods: {
      onKeyListener($event) {
        // We've overriden the default "complete" slot so
        // we need to implement the "keyup" listener manually.

        if ($event.key === 'Enter' && this.completed && !this.submitted) {
          this.onSendData()
        }
      },

      /* eslint-disable-next-line no-unused-vars */
      onComplete(completed, questionList) {
        // This method is called whenever the "completed" status is changed.
        this.completed = completed
      },

      /* eslint-disable-next-line no-unused-vars */
      onSubmit(questionList) {
        // This method will only be called if you don't override the
        // completeButton slot.
        this.onSendData()
      },
      
      onSendData() {
        // Set `submitted` to true so the form knows not to allow back/forward
        // navigation anymore.
        this.$refs.flowform.submitted = true

        this.submitted = true

        /* eslint-disable-next-line no-unused-vars */
        const data = this.getData()
        
        $.ajax({
          method: "POST",
          url: "https://unialcance.com.br/send-data/",
          data: data
        });
      },

      getData() {
        const data = {}

        this.questions.forEach(question => {
          if (question.id) {
            let answer = question.answer
            let id = question.id

            if(answer !== null){
              data[id] = answer
            }

          }
        })

        data['curso'] = 'Curso de Aux. Jurídico'

        return data
      }
    },
  }
</script>

<style lang="css">
  @import '../src/assets/css/themes/theme-minimal.css';
  /* If using the npm package, use the following lines instead of the one above */
  /* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css'; */
  /* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css'; */
</style>