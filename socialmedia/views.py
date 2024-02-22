from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from .models import Blikart
from .serializers import BlikartSerializer


class SocialMediaView(APIView):

   

    # def get_student(self, pk):
    #     try:
    #         student = Blikart.objects.get(postId=pk)
    #         return student
    #     except Blikart.DoesNotExist:
    #         raise Http404

    # def get(self, request, pk=None):
    #     if pk:
    #         data = self.get_student(pk)
    #         serializer = BlikartSerializer(data)
    #     else:
    #         data = Blikart.objects.all()
    #         serializer = BlikartSerializer(data, many=True)
    #     return Response(serializer.data)

    def post(self, request):
        data = request.data
        serializer = BlikartSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Blikart Added Successfully", safe=False)
        return JsonResponse("Failed to Add Blikart", safe=False)

    # def put(self, request, pk=None):
    #     student_to_update = Blikart.objects.get(postId=pk)
    #     serializer = BlikartSerializer(instance=student_to_update, data=request.data, partial=True)

    #     if serializer.is_valid():
    #         serializer.save()
    #         return JsonResponse("Blikart updated Successfully", safe=False)
    #     return JsonResponse("Failed To Update Blikart")

    # def delete(self, request, pk):
    #     student_to_delete = Blikart.objects.get(postId=pk)
    #     student_to_delete.delete()
    #     return JsonResponse("Blikart Deleted Successfully", safe=False)
   
    
    
    