class StudentsController < ApplicationController
    before_action :find_student, only: [:show, :edit, :update, :destroy]

    def index
        @students = Student.all
        render json: @students
      end
    
      def show
        render json: @student
      end
    
      def new
      end
    
      def create
        @student = Student.new(name: params[:name], cohort_id: params[:cohort_id])
        if @student.save
          render json: @student
        else
          render json: {error: "Unable to create student."}, status: 400
        end
      end
    
      def edit
      end
    
      def update
      end
    
      def destroy

      end
    
      private
    
      def students_params
        
      end

      def find_student
        @student = Student.find(params[:id])
      end
    
end
