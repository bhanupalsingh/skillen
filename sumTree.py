class NewNode:
    def __init__(self,data):
        self.data = data;
        self.left = None;
        self.right = None;


def isSumTree(root):
    if(root is None):
        return True;
        
    if(root.left is not None and root.right is not None):
        ls = isSumTree(root.left);
        rs = isSumTree(root.right);
        print("left subtree sum:-"+str(ls));
        print("right subtree sum:-"+str(rs));
        print("root.data is:-"+str(root.data));
        if(root.data == ls + rs):
            return 2*root.data;
    elif (root.left is not None):
        if(root.data == isSumTree(root.left)):
            return 2*root.data;
    elif(root.right is not None):
        if(root.data == isSumTree(root.right)):
            return 2*root.data;
    elif(root.left is None and root.right is None):
        return root.data;
        
    
    return False;
    




if __name__ == '__main__':
    root = NewNode(27);
    root.left = NewNode(10); 
    root.right = NewNode(3); 
    root.left.left = NewNode(4); 
    root.left.right = NewNode(6); 
    root.right.right = NewNode(3); 
    if(isSumTree(root)):
        print("The given tree is a SumTree "); 
    else:
        print("The given tree is not a SumTree "); 

