class StudentsController < ApplicationController

    def index
        @students = Student.all
        render json: @students
      end
    
      def show
        @student = Student.find(params[:id])
        render json: @student
      end
    
      def new
      end
    
      def create
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
    
end
